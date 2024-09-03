package com.example.sarkariresult.serviceimpl;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.sarkariresult.constatns.CategorysConstants;
import com.example.sarkariresult.constatns.DefaultConstants;
import com.example.sarkariresult.model.CoursePost;
import com.example.sarkariresult.model.GeminiResponse;
import com.example.sarkariresult.repositary.PostRepo;
import com.example.sarkariresult.service.ScrabDataService;
import com.example.sarkariresult.utility.CommonUtilityMethods;
import com.example.sarkariresult.utility.FindCategory;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * Author: Naveen Saini
 * Date: 23-Aug-2024	
 */
@Service
public class ScrabDataServiceImpl  implements ScrabDataService{
	

	@Autowired
	private	PostRepo				postRepo;
	
	@Autowired
	private FindCategory			findCategory;
	
	@Autowired
	private CommonUtilityMethods	commonUtilityMethods;
	
	private final String PROMPT_FOR_ALERTNATE_TITLE = "Generate a concise headline for an \" %s\" . Keep it informative and engaging. limit only 1";
	private final String PROMPT_FOR_POST_			= "Generate a Next.js functional component that displays recruitment information based on the following HTML content:\n"
			+ "\n"
			+ "\"%s\"\n"
			+ "\n"
			+ "Use Tailwind CSS for styling. The component should:\n"
			+ "\n"
			+ "1. Be SEO-friendly with a clear structure (headings, paragraphs, lists)\n"
			+ "2. Use Tailwind CSS classes for all styling (no inline CSS)\n"
			+ "3. Include a title, post details, brief information, application fee, important dates, and vacancy details as present in the HTML\n"
			+ "4. Format tables using Tailwind CSS classes\n"
			+ "5. Color all links blue using Tailwind classes\n"
			+ "6. Remove any content related to WhatsApp, Telegram, social media, or Play Store\n"
			+ "7. Replace any links containing 'freejobalert' with 'sarkarresult.website'\n"
			+ "8. Exclude any script tags\n"
			+ "9. remove that code which are not valid in next js component like doubble className in same tag "
			+ "10. Include a JSX comment summarizing the component's content\n"
			+ "11. Provide only the JSX code inside the component function, without surrounding HTML, head, or body tags\n"
			+ "\n"
			+ "Use this structure:\n"
			+ "\n"
			+ "export default function ComponentName() {\n"
			+ "  {/* Summary of recruitment information */}\n"
			+ "  return (\n"
			+ "    <div className=\"container mx-auto px-4 py-8\">\n"
			+ "      {/* Component content here, based on the provided HTML */}\n"
			+ "    </div>\n"
			+ "  );\n"
			+ "}\n"
			+ "\n"
			+ "Generate the component based on the provided HTML content, following these guidelines.";
	
	public String PROMPT_FOR_TOTAL_VACANCY="Extract from the HTML:\n"
			+ "1. The total vacancy number. Remove any non-numeric characters (like '+').\n"
			+ "2. The last date to apply or submit the application.\n"
			+ "\n"
			+ "Return only these two values separated by a comma. If either is not found, use 0 for vacancy and \"Not specified\" for the date.\n"
			+ "\n"
			+ "\"%s\"";
	private final String PROMPT_FOR_VALIDATION = "Validate and correct the following Next.js component: %s just return the code without any explations";
	
	@Value("${file.path}")
	private String folderPath;
	


	
	
	
	
	
	public String[] getTheSinglePostData(String link) {		
		 Document		doc				=	null;	
		 String[]		vacancyAndDate	=	{"0","1-1-1901"};
		 String 		cleanedResponse	=	null;
		 String[]		response		=	new String[3];
		try {
			doc 		 = Jsoup.connect(link).get();
			String title = doc.title(); 
			System.out.println(title);

			Element	el= doc.select("div.inside-article div.entry-content").first();
		//	System.out.println(String.format(PROMPT_FOR_POST_,el.html()));
		//			vacancyAndDate	=	commonUtilityMethods.getTheAiRequest(String.format(PROMPT_FOR_TOTAL_VACANCY,el.html())).split(",");
			System.out.println(el.html().length()+" ==========");

			String  valudString= el.html();
			if(valudString.length()>DefaultConstants.CONVERT_THE_STRING_TO_LIMIT)
						  valudString= el.html().substring(0,DefaultConstants.CONVERT_THE_STRING_TO_LIMIT);
			
			System.out.println(valudString.length()+" == split arrr========");

			String  arr	=	commonUtilityMethods.getTheAiRequest(String.format(PROMPT_FOR_POST_,valudString));
			
			System.out.println(arr.length()+" == 1st arrr========");

					//arr	=	commonUtilityMethods.getTheAiRequest(String.format(PROMPT_FOR_VALIDATION,arr));
			
					//System.out.println(arr.length()+" == 2nst arrr========");

			

			cleanedResponse = arr.replaceAll("```jsx", "")
                      .replaceAll("```", "")
                      .replaceAll("javascript", "")
						.replaceAll("use client", "")
	                      .trim();
			
			
			if(cleanedResponse.startsWith("html")) {
				cleanedResponse = arr.replaceAll("html", "")  
						.replaceAll("```", "")
						.replaceAll("javascript", "")
						.replaceAll("use client", "")
	                      .trim();
				
				
				cleanedResponse="import React from 'react';const JobPost = () => { return (<>"+cleanedResponse+" </> );};export default JobPost;";
				
			}
			cleanedResponse 	=	commonUtilityMethods.cleanJSXCode(cleanedResponse);
			response[0]=cleanedResponse;
			response[1]=vacancyAndDate[0];
			response[2]=vacancyAndDate[1];
			
		} catch (IOException e) {
			
		}
		
		return response;

		
		
		
	}
	
	public void getTheNewUpdateLink() throws InterruptedException {
		 Document 		doc				=	null;
		 
		 
		
		
			try {
				doc = Jsoup.connect("https://www.freejobalert.com/new-updates/").get();		
				//findCategory.updateCategory();

				 Elements table = doc.select("div.lsnewuts.nupdate969430 table");

			        // Check if any tables are found within the div
			        if (table.isEmpty()) {
			            System.out.println("No tables found within the div with classes 'lsnewuts' and 'nupdate969430'.");
			            return;
			        }

			      
			            // Extract data from rows (excluding header row)
			            Elements rows = table.select("tr:not(:first-child)");
			            for (Element row : rows) {
			                // Extract date and "Get Details" link
			                String title = row.select("td:nth-child(2)").text().trim();
			                String link = row.select("a").attr("href");

			                
			                if(!title.toLowerCase().equals("view all") && !title.toLowerCase().equals("new updates")
									&& !title.toLowerCase().equals("update date")
									&& !title.toLowerCase().equals("update information")
									&& !title.toLowerCase().equals("more information")
									) {
								// storing the original title
							
//								
			                	String url	=	postRepo.checkIfThePostIsPresent(link);
			                	System.out.println(url+"  "+link);
			                	if(url==null)
			                	saveFileProcess(link,title,0);
								Thread.sleep(2000);
			            }
			         }

			} catch (Exception e) {
				e.printStackTrace();
			}  

			
			
		
	}
	public void saveFileProcess(String href,String title,Integer active) throws Exception {
		
			 String[]		content			=	null;
			 String			originalTitle	=	null;
			 String			newTitle		=	null;
			 String			url				=	null;
			 Integer		insertedId		=	0;
			 Integer		totalPost		=	0;
			 String			expiaryDate		=	"";
			 HashSet<String>category		=	new HashSet<>();
			 originalTitle	=	title;
			 System.out.println(originalTitle);
			 System.out.println(href);
		
			 newTitle		=	commonUtilityMethods.getTheAiRequest(String.format(PROMPT_FOR_ALERTNATE_TITLE, originalTitle));
			 // let's take first store the original title and make our own title
			 url				=	commonUtilityMethods.toSlug(newTitle);
			 
			 content			=	getTheSinglePostData(href);
			 
			 if(content==null) return;
		
		
			 category		=	 findCategory.getTheSearchCategory(originalTitle);
		
		
		
			 totalPost		=	Integer.parseInt(content[1]);
			 expiaryDate		=	content[2];
			 insertedId		=	postRepo.insertIntoPost(href,originalTitle, url, newTitle,totalPost,active,expiaryDate);
			 if(insertedId!=0) {
				 makeFile(url, content[0]);
				 if(category.size()>0)
					 InsertIntoCoursePost(category, originalTitle);
			 }
		
		
	}
	
	public void makeFile(String fileName,String content) {
		String fullPath=folderPath+File.separator+fileName;
		File dir = new File(fullPath);
		if(dir.exists()) {
			return;
		}
        dir.mkdir();

        try {
            File file1 = new File(fullPath+File.separator+"page.jsx");
            FileWriter fileWriter = new FileWriter(file1);
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
            bufferedWriter.write(content);
            bufferedWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    
		
	}
	
	
	public void InsertIntoCoursePost(HashSet<String> list,String origionalTitle) {
		List<CoursePost>	records		=	 new ArrayList<>();
		Map<String,Integer>	map			= 	 new CategorysConstants().getTheCategoryIdMap();
		System.out.println(map.get("JK"));
		System.out.println(map);
		System.out.println(list);
		for(String i:list) {
			CoursePost		cPost	=	 new CoursePost();
			System.out.println(i+"course name"+origionalTitle);
			cPost.setCourseId(map.get(i));
			cPost.setOrigionalPostId(origionalTitle);
			records.add(cPost);
		}
		System.out.println(records);
		
		postRepo.insertIntoCoursePostId(records);
		
	}

	
	public void getTheActiveLink() {
		 Document 		doc				=	null;
		 Integer		isUpdated		=	0;

		
		try {
			doc = Jsoup.connect("https://www.freejobalert.com/").get();		

			 Element table = doc.select("table.qltpmnu").first();

			 Elements tdElements = table.select("td");

		        for (Element td : tdElements) {
		            Element link = td.selectFirst("a"); // Get the first 'a' tag within the 'td'
		            if (link != null) {
		                String linkText = link.text(); // Text of the link
		                String href = link.attr("href"); // href attribute of the link
		             
		                
		                isUpdated	=	postRepo.updateThePostForBulk(href);
		                
		                if(isUpdated==0) {
		                	saveFileProcess(href,linkText,1);
		                	
		                }
		            }
	                Thread.sleep(2000);

		        }
		         

		} catch (Exception e) {
			e.printStackTrace();
		}  
		
		
	}

	@Override
	public void getTheData() {
		
		try {
			getTheNewUpdateLink();
		} catch (InterruptedException e) {

			e.printStackTrace();
		}		
		
	}


	@Override
	public void getTheActivePost() {

		getTheActiveLink();
		
	}
	
	
	
	

}
