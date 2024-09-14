package com.example.sarkariresult.serviceimpl;

import java.io.IOException;
import java.time.LocalDate;
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
import com.example.sarkariresult.model.TodayUpdateDto;
import com.example.sarkariresult.model.TodayUpdateModel;
import com.example.sarkariresult.repositary.PostRepo;
import com.example.sarkariresult.repositary.TodayUpdateRepo;
import com.example.sarkariresult.service.TodayUpdateService;
import com.example.sarkariresult.utility.CommonUtilityMethods;
import com.example.sarkariresult.utility.FindCategory;

/**
 * Author: Naveen Saini
 * Date: 10-Sep-2024	
 */

@Service
public class TodayUpdateServiceImpl implements TodayUpdateService {
	
	@Autowired
	private	TodayUpdateRepo		todayUpdateRepo;
	
	@Autowired
	private	PostRepo				postRepo;
	
	@Autowired
	private FindCategory			findCategory;
	
	private	String	HARYANA_JOB_URL	=	"https://haryanajobs.in/";
	@Autowired
	private CommonUtilityMethods	commonUtilityMethods;
	
	private	String	BASE_URL		=	"https://sarkariresult.website";

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
			+ "13 remove all the images and chagnes the word synonoums so no plagrisom ocure"
			+ "14 The generated code should be free from syntax errors and should be ready to use in a Next.js project without requiring further modification."
			+ "15. Provide only the JSX code inside the component function, without surrounding HTML, head, or body tags\n"
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
	
	

	@Override
	public Integer inserIntoTodayUpdateService(String content, String date) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer selectIfTheCotnentAndTheDateIsExist(String content, String date) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TodayUpdateModel getTheTodayContent() {
		TodayUpdateModel	response		= new TodayUpdateModel();
		 LocalDate			time			= LocalDate.now();
		 String				validateItsToday= time.getDayOfMonth()+"."+time.getMonthValue()+"."+time.getYear();
		 
		 response.setDate(validateItsToday);
		 response.setObj(todayUpdateRepo.getTheConentOfToday(validateItsToday));
		 return response;
	}
	
	@Override
	public List<TodayUpdateDto> getTheTodayUpdateByMatchingDate(String matchingDate) {
		
		 return todayUpdateRepo.getTheConentOfToday(matchingDate);
	}
	
	
	@Override
	public int getTheTodayPostUpdate() {
		 Document		doc					=	null;	
		 LocalDate		time				= LocalDate.now();
		 String			validateItsToday	= time.getDayOfMonth()+"."+time.getMonthValue()+"."+time.getYear();
		 String			responseDate		= null;
		 Integer 		ifThePostPresent	=	0;
		 String			link				=	"";
		 Integer		isNeedToCommit		=	0;
		 
		 		try {
		 					doc 		 = Jsoup.connect(HARYANA_JOB_URL).get();
					String 	title = doc.title(); 
					
					System.out.println(title);
					
					Element	firstFigureTag= doc.selectFirst("figure");
					 if (firstFigureTag != null) {
				            Element firstDivSibling = firstFigureTag.previousElementSibling();
				            
				            responseDate	=	commonUtilityMethods.getValueInsideParentheses(firstDivSibling.text().trim());
				            
				            if (firstDivSibling != null && firstDivSibling.tagName().equals("div")) {
//				                System.out.println("First preceding div sibling: " + firstDivSibling.text()+"day "+time.getDayOfMonth()+" mon "+time.getMonthValue());
				            
				                if(responseDate!=null && responseDate.equals(validateItsToday.trim())) {
				                	
				       				Elements table = firstFigureTag.select("table tbody");
				       				
				       				System.out.println(table.html());
				                	Elements rows = table.select("tr");
							            for (Element row : rows) {
							                // Extract the title
							                 title = row.select("td:nth-child(2)").text().trim();
							                 link = row.select("a").attr("href");
							                 System.out.println(title);
							                 ifThePostPresent	=	todayUpdateRepo.checkIfTheContentAndDateExist(title, responseDate);
							                 
							                 if(ifThePostPresent!=0)continue;
							                 
							                 isNeedToCommit+=saveFileProcess(link, title, 0, responseDate);
							                 Thread.sleep(2000);
							                
							            }
				                	
				                }
				                
				            }
				            
				            else {
				                System.out.println("No preceding div sibling found.");
				            }
				            
				            
				        } else {
				            System.out.println("No figure element found.");
				        }
					
					

				} catch (IOException | InterruptedException e) {
					System.out.println(e.getMessage());
				}
		 		return isNeedToCommit;
		 		
		
		
		
	}
	public int saveFileProcess(String href,String title,Integer active,String responseDate) {
		
		 String[]		content			=	null;
		 String			originalTitle	=	null;
		 String			newTitle		=	null;
		 String			url				=	null;
		 Integer		insertedId		=	0;
		 Integer		totalPost		=	0;
		 String			expiaryDate		=	"";
		 HashSet<String>category		=	new HashSet<>();
		 String			dbUrl			=	null;
		 Integer		isNeedToCommit	=	0;

		 originalTitle	=	title;
		 System.out.println(originalTitle);
		 System.out.println(href);
		try {
	
		 newTitle		=	commonUtilityMethods.getTheAiRequest(String.format(commonUtilityMethods.PROMPT_FOR_ALERTNATE_TITLE, originalTitle));
		 // let's take first store the original title and make our own title
		 url				=	commonUtilityMethods.toSlug(newTitle);
		 
		 content			=	getTheSinglePostData(href);
		 
		 if(content==null) return isNeedToCommit; 
	
	
		 category		=	 findCategory.getTheSearchCategory(originalTitle);
	
	
	
		 totalPost		=	Integer.parseInt(content[1]);
		 expiaryDate	=	content[2];
		 dbUrl			=	postRepo.checkIfThePostIsPresent(href);
		 if(dbUrl==null) {
			 insertedId		=	postRepo.insertIntoPost(href,originalTitle, url, newTitle,totalPost,active,expiaryDate);
	    	 commonUtilityMethods.makeFile(url, content[0]);
			 commonUtilityMethods.makeLayOutFile(newTitle, url);
			 // sending the Messages
			 if(category.size()>0)
				 InsertIntoCoursePost(category, originalTitle);
			 
			 isNeedToCommit+=1;
		 }
		 else {
	         todayUpdateRepo.insertInotTodayUpdate(dbUrl,title, responseDate);

		 }
		 commonUtilityMethods.sendMessage(" Important Notice Alert 🔔 \n"+newTitle+"\n "+BASE_URL+"/"+url);
		 
		}
		catch(Exception e) {
//			e.printStackTrace();
			System.out.println(e.getMessage());
		}
		
		return isNeedToCommit;
	
	
	}
	
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

			Element	el= doc.select("article").first();
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
						.replaceAll("Home", "")
	                      .trim();
			
			
			
			cleanedResponse 	=	commonUtilityMethods.cleanJSXCode(cleanedResponse);
			response[0]=cleanedResponse;
			response[1]=vacancyAndDate[0];
			response[2]=vacancyAndDate[1];
		}
			
		} catch (Exception e) {
			
		}
		
		return response;

		
		
		
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

	@Override
	public Integer getTheTotalPagesOfMatcingDates() {
		Integer 	totalPage	=	0;
		totalPage	=	todayUpdateRepo.getTheTotalItems();
		totalPage 	=(int)Math.ceil((double)totalPage/DefaultConstants.DEFAULT_LIMIT_FOR_MATCHING_DATES);

		return totalPage;
	}

	@Override
	public List<String> getTheAllMatchingDates(Integer page) {
		Integer									defualMessageLimit	=	DefaultConstants.DEFAULT_LIMIT_FOR_MATCHING_DATES;
		Integer									offset				=	(page==1)?0:(page-1)*defualMessageLimit;
		return todayUpdateRepo.getTheMathicngDate(defualMessageLimit, offset);
	}
	

	
}
