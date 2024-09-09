package com.example.sarkariresult.serviceimpl;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
	private final String PROMPT_FOR_VALIDATION = "Validate and correct the following Next.js component ane make sure the code follow the next js standards and all the open tag brackets have close brackets: %s just return the code without any explations";
	
	@Value("${file.path}")
	private String folderPath;
	
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
			
			
			count = countTripleBackticks(arr);
			
			System.out.println(arr.length()+" == 1st arrr======== first count"+count);

			if(arr.length()>DefaultConstants.CONVERT_THE_STRING_TO_LIMIT && count!=2) {
				  arr= arr.substring(0,DefaultConstants.CONVERT_THE_STRING_TO_LIMIT);
	
					arr	=	commonUtilityMethods.getTheAiRequest(String.format(PROMPT_FOR_VALIDATION,arr));
			
					System.out.println(arr.length()+" == 2nst arrr========");

			}
						
			arr = handleSingleBacktickResponse(arr);
			
			
			
			if(arr!=null) {			
			
			cleanedResponse	= extractString(arr);
			
			
			

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
	
	
	public static String extractString(String input) {
		
		 String regex = "```([\\s\\S]*?)```"; // [\\s\\S] matches any character, including newlines
	        Pattern pattern = Pattern.compile(regex);
	        Matcher matcher = pattern.matcher(input);

	        // Check if the pattern is found
	        if (matcher.find()) {
	            // Return the content found between the triple backticks
	            return matcher.group(1).trim();
	        }

	        // Return null if no match is found
	        return null;
    }
	
	
	 public static int countTripleBackticks(String s) {
	        /**
	         * Counts the number of occurrences of triple backticks (````) in the input string.
	         *
	         * @param s The input string.
	         * @return The count of triple backticks.
	         */
	        String pattern = "```";
	        Pattern regex = Pattern.compile(pattern);
	        Matcher matcher = regex.matcher(s);
	        int count = 0;
	        while (matcher.find()) {
	            count++;
	        }
	        return count;
	    }
	public void getTheNewUpdateLink() throws InterruptedException {
		 Document 		doc				=	null;
		 Integer		count			=	0;
		 
		 
		
		
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
			                	if(url==null) {
			                		
				                	saveFileProcess(link,title,0);
			                	}
			                	else {
			                		count++;
			                	}
								Thread.sleep(1000);
			            }
			                if(count==20) {
			                	System.out.println("everythings is updated");
			                	return;
			               };
			         }

			} catch (Exception e) {
				System.out.println(e.getMessage());
			}  

			
			
		
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
				 makeLayOutFile(newTitle, url);
				 // sending the Messages
				 commonUtilityMethods.sendMessage(""+newTitle+"\n "+BASE_URL+"/"+url);
				 if(category.size()>0)
					 InsertIntoCoursePost(category, originalTitle);
			 }
			 
			}
			catch(Exception e) {
//				e.printStackTrace();
				System.out.println(e.getMessage());
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
        	System.out.println(e.getMessage());
        }
    
		
	}
	
	public void makeLayOutFile(String title,String fileName) {
		String fullPath=folderPath+File.separator+fileName;
		File dir = new File(fullPath);
		if(!dir.exists()) {
			return;
		}
     

        try {
            File file1 = new File(fullPath+File.separator+"layout.jsx");
            FileWriter fileWriter = new FileWriter(file1);
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
            bufferedWriter.write("import { BASE_URL } from \"@/constant/ClientUrl\";export const metadata = {metadataBase:new URL(BASE_URL + \"/ "+fileName+"\"),keywords:[\"sarkariresult\",\"sarkariresult website\",\"sarkari result\",\"goverment jobs\",\"free job alert\",\"haryanan Jobs\"], title: { default:\" "+title.trim()+"| sarkariresult.website"+" \",      template: `"+"%s | sarkarresult.website"+"`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:[\"/public/logo.png\"]} }};export default function admitCardLayout({ children }) { return (<><section className=\"text-center overflow-y-scroll\">{children}</section> </>   );}");
            bufferedWriter.close();
        } catch (IOException e) {
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

	
	public void getTheActiveLink() {
		 Document 		doc				=	null;
		 Integer		isUpdated		=	0;

		
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
		                	saveFileProcess(href,linkText,1);
		                	
		                }
		            }
	                Thread.sleep(2000);

		        }
		         

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}  
		
		
	}
	
	private String handleSingleBacktickResponse(String aiResponse) {
	    int count = countTripleBackticks(aiResponse);
	    int defaultMinux=2000;

	    while (count != 2) {
	        // Cut the response to half its current length
	        aiResponse = aiResponse.substring(0, aiResponse.length()-defaultMinux);
	        System.out.println("Truncated AI Response Length: " + aiResponse.length());

	        // Send the request again for validation
	        aiResponse = commonUtilityMethods.getTheAiRequest(String.format(PROMPT_FOR_VALIDATION, aiResponse));
	        System.out.println("Validated AI Response Length: " + aiResponse.length());

	        // Count occurrences of triple backticks again
	        count = countTripleBackticks(aiResponse);
	        System.out.println("Triple Backticks Count after validation: " + count);
	        defaultMinux+=2000;
	    }

	    // If we exit the loop with count == 2, return the cleaned response
	    return (count == 2) ? aiResponse : null;
	}


	@Override
	public void getTheData() {
		
		try {
			getTheNewUpdateLink();
		} catch (InterruptedException e) {
			System.out.println(e.getMessage());

		}		
		
	}


	@Override
	public void getTheActivePost() {

		getTheActiveLink();
		
	}
	
	
	
	

}
