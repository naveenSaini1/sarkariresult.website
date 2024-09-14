package com.example.sarkariresult.serviceimpl;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;


import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.sarkariresult.constatns.CategorysConstants;
import com.example.sarkariresult.constatns.DefaultConstants;
import com.example.sarkariresult.model.CoursePost;
import com.example.sarkariresult.repositary.PostRepo;
import com.example.sarkariresult.service.ScrabDataService;
import com.example.sarkariresult.utility.CommonUtilityMethods;
import com.example.sarkariresult.utility.FindCategory;


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
			+ "7. make sure all the html tage should be right so on next js build time they should not produce any error \n"
			+ "8. Exclude any script tags\n"
			+ "9. remove that code which are not valid in next js component like doubble className in same tag "
			+ "10. Include a JSX comment summarizing the component's content\n"
			+ "11 Ensure that the component adheres to the Next.js standards,"
			+ "12 All the open tag brackets have close brackets"
			+ "13 The generated code should be free from syntax errors and should be ready to use in a Next.js project without requiring further modification."
			+ "14. Provide only the JSX code inside the component function, without surrounding HTML, head, or body tags\n"
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
	
	
	
	private	String	BASE_URL		=	"https://sarkariresult.website";
	
	


	
	
	
	
	
	public String[] getTheSinglePostData(String link) {		
		 Document		doc				=	null;	
		 String[]		vacancyAndDate	=	{"0","1-1-1901"};
		 String 		cleanedResponse	=	null;
		 String[]		response		=	new String[3];
		 Integer 		count			=  0;
		try {
			doc 		 = Jsoup.connect(link).get();
			String title = doc.title(); 
			System.out.println(title);

			Element	el= doc.select("div.inside-article div.entry-content").first();
		//	System.out.println(String.format(PROMPT_FOR_POST_,el.html()));
		//			vacancyAndDate	=	commonUtilityMethods.getTheAiRequest(String.format(PROMPT_FOR_TOTAL_VACANCY,el.html())).split(",");
			System.out.println(el.html().length()+" ==========");

			String  valudString= el.html();
			
			System.out.println(valudString.length()+" == split arrr========");

			String  arr	=	commonUtilityMethods.getTheAiRequest(String.format(PROMPT_FOR_POST_,valudString));
			
			
			count = commonUtilityMethods.countTripleBackticks(arr);
			
			System.out.println(arr.length()+" == 1st arrr======== first count"+count);

			if(arr.length()>DefaultConstants.CONVERT_THE_STRING_TO_LIMIT && count!=2) {
				  arr= arr.substring(0,DefaultConstants.CONVERT_THE_STRING_TO_LIMIT);
	
					arr	=	commonUtilityMethods.getTheAiRequest(String.format(commonUtilityMethods.PROMPT_FOR_VALIDATION,arr));
			
					System.out.println(arr.length()+" == 2nst arrr========");

			}
						
			arr = commonUtilityMethods.handleSingleBacktickResponse(arr);
			
			
			
			if(arr!=null) {			
			
			cleanedResponse	= commonUtilityMethods.extractString(arr);
			
			
			

			cleanedResponse =cleanedResponse
					.replaceAll("jsx", "")
                      .replaceAll("javascript", "")
						.replaceAll("use client", "")
						.replaceAll("WWW.FREEJOBALERT.COM", "")
	                      .trim();
			
			
			
			
//			if(cleanedResponse.startsWith("html")) {
//				cleanedResponse = arr.replaceAll("html", "")  
//						.replaceAll("```", "")
//						.replaceAll("javascript", "")
//						.replaceAll("use client", "")
//	                      .trim();
//				
				
//				cleanedResponse="import React from 'react';const JobPost = () => { return (<>"+cleanedResponse+" </> );};export default JobPost;";
				
//			}
			cleanedResponse 	=	commonUtilityMethods.cleanJSXCode(cleanedResponse);
			response[0]=cleanedResponse;
			response[1]=vacancyAndDate[0];
			response[2]=vacancyAndDate[1];
		}
			
		} catch (Exception e) {
			
		}
		
		return response;

		
		
		
	}
	
	

	

	public int getTheNewUpdateLink() throws InterruptedException {
		 Document 		doc				=	null;
		 Integer		count			=	0;
		 Integer        isNeedToUpdate	=	0;
		 
		 
		
		
			try {
				doc = Jsoup.connect("https://www.freejobalert.com/new-updates/").get();		
				//findCategory.updateCategory();

				 Elements table = doc.select("div.lsnewuts.nupdate969430 table");

			        // Check if any tables are found within the div
			        if (table.isEmpty()) {
			            System.out.println("No tables found within the div with classes 'lsnewuts' and 'nupdate969430'.");
			            return 0;
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
			                	System.out.println(url+"  "+link+"  "+isNeedToUpdate);
			                	if(url==null) {
			                		
				                	saveFileProcess(link,title,0);
				                	isNeedToUpdate++;
			                	}
			                	else {
			                		count++;
			                	}
								Thread.sleep(1000);
			            }
			                if(count==20) {
			                	System.out.println("everythings is updated");
			                	return isNeedToUpdate;
			               };
			         }

			} catch (Exception e) {
				System.out.println(e.getMessage());
			}  

			return isNeedToUpdate;
			
			
		
	}
	public void saveFileProcess(String href,String title,Integer active) {
		
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
			try {
		
			 newTitle		=	commonUtilityMethods.getTheAiRequest(String.format(commonUtilityMethods.PROMPT_FOR_ALERTNATE_TITLE, originalTitle));
			 // let's take first store the original title and make our own title
			 url				=	commonUtilityMethods.toSlug(newTitle);
			 
			 content			=	getTheSinglePostData(href);
			 
			 if(content==null) return;
		
		
			 category		=	 findCategory.getTheSearchCategory(originalTitle);
		
		
		
			 totalPost		=	Integer.parseInt(content[1]);
			 expiaryDate		=	content[2];
			 insertedId		=	postRepo.insertIntoPost(href,originalTitle, url, newTitle,totalPost,active,expiaryDate);
			
	
			 
			 if(insertedId!=0) {
				 commonUtilityMethods.makeFile(url, content[0]);
				 commonUtilityMethods.makeLayOutFile(newTitle, url);
				 // sending the Messages
				 commonUtilityMethods.sendMessage("Important Notice Alert 🔔 \n"+newTitle+"\n "+BASE_URL+"/"+url);
				 if(category.size()>0)
					 InsertIntoCoursePost(category, originalTitle);
			 }
			 
			}
			catch(Exception e) {
//				e.printStackTrace();
				System.out.println(e.getMessage());
			}
		
		
	}
	

	public void InsertIntoCoursePost(HashSet<String> list,String origionalTitle) {
		List<CoursePost>	records		=	 new ArrayList<>();
		Map<String,Integer>	map			= 	 new CategorysConstants().getTheCategoryIdMap();
		
		for(String i:list) {
			CoursePost		cPost	=	 new CoursePost();
			cPost.setCourseId(map.get(i));
			cPost.setOrigionalPostId(origionalTitle);
			records.add(cPost);
		}
		postRepo.insertIntoCoursePostId(records);
		
	}

	
	public int getTheActiveLink() {
		 Document 		doc				=	null;
		 Integer		isUpdated		=	0;
		 Integer		isNeedToUpdate	=	0;
		 

		
		try {
			// let's first set all the current active post as 0
			postRepo.updateAllTheActive();
			
			
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
		                	isNeedToUpdate+=1;
		                	saveFileProcess(href,linkText,1);
		                	
		                }
		            }
	                Thread.sleep(2000);

		        }
		         

		} catch (Exception e) {
			System.out.println(e.getMessage());
		} 
		return isNeedToUpdate;
		
		
	}
	


	@Override
	public int getTheData() {
		
		try {
			return getTheNewUpdateLink();
		} catch (InterruptedException e) {
			System.out.println(e.getMessage());

		}
		return 0;
		
	}


	@Override
	public int getTheActivePost() {

		return getTheActiveLink();
		
	}

}
