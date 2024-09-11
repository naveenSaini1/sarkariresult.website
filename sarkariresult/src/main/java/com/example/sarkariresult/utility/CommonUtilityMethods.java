package com.example.sarkariresult.utility;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.example.sarkariresult.model.GeminiResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.Normalizer;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


/**
 * Author: Naveen Saini
 * Date: 25-Aug-2024	
 */
@Component
public class CommonUtilityMethods {
	
	@Autowired
	private RestTemplate restTemplate;
	
	@Value("${sarkari.ai.key}")
	private String apiKey;
	
	@Value("${file.path.for.commit.file}")
	private String commitFilePath;
	

	@Value("${telegram.bot.token}")
	private String botToken;

	@Value("${telegram.channel.chatId}")
	private String chatId;
	
	@Value("${file.path}")
	private String folderPath;

	private final String TELEGRAM_API_URL = "https://api.telegram.org/bot%s/sendMessage?chat_id=%s&text=%s";

	public final String PROMPT_FOR_VALIDATION = "Validate and correct the following Next.js component ane make sure the code follow the next js standards and all the open tag brackets have close brackets: %s just return the code without any explations";

	public final String PROMPT_FOR_ALERTNATE_TITLE = "Generate a concise headline for an \" %s\" . Keep it informative and engaging. limit only 1";

	
	// Define a set of common stop words to be removed from the slug
    private static final Set<String> STOP_WORDS = new HashSet<>(Arrays.asList(
        "a", "an", "the", "and", "or", "but", "of", "for", "on", "in", "with", "to", "by", "is", "at", "this", "that"
    ));
    
	private final String API_URL_TEMPLATE 			= "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=%s";


    // Maximum length for the slug
    private static final int MAX_SLUG_LENGTH = 50;

    public static String toSlug(String title) {
        // Step 1: Convert the title to lowercase
        String slug = title.toLowerCase();

        // Step 2: Normalize the string (removes accents and special characters)
        slug = Normalizer.normalize(slug, Normalizer.Form.NFD);
        slug = slug.replaceAll("\\p{InCombiningDiacriticalMarks}+", "");

        // Step 3: Replace any character that is not a letter, digit, or whitespace with a hyphen
        slug = slug.replaceAll("[^\\w\\s-]", "-");

        // Step 4: Replace any sequence of whitespace or hyphens with a single hyphen
        slug = slug.replaceAll("[-\\s]+", "-");

        // Step 5: Remove stop words from the slug
        slug = removeStopWords(slug);

        // Step 6: Trim leading and trailing hyphens
        slug = slug.replaceAll("^-|-$", "");

        // Step 7: Truncate the slug to the maximum length if necessary
        if (slug.length() > MAX_SLUG_LENGTH) {
            slug = slug.substring(0, MAX_SLUG_LENGTH);
            slug = slug.replaceAll("-$", ""); // Ensure the slug doesn't end with a hyphen after truncation
        }

        return slug;
    }

    private static String removeStopWords(String slug) {
        StringBuilder result = new StringBuilder();
        String[] words = slug.split("-");

        for (String word : words) {
            if (!STOP_WORDS.contains(word)) {
                if (result.length() > 0) {
                    result.append("-");
                }
                result.append(word);
            }
        }

        return result.toString();
    }
    
    public String getTheAiRequest(String prompt) {
		String			 	responseData	=	"";
        HttpHeaders 	 	headers 		= new HttpHeaders();
        ObjectMapper 	 	objectMapper 	= new ObjectMapper();
        ObjectNode 		 	contentNode 	= objectMapper.createObjectNode();
        ObjectNode 			partsNode 		= objectMapper.createObjectNode();
        HttpEntity<String> 	request			= null;
        String 				requestBody		= null;
        
        
		try {
			
			 String apiUrl = String.format(API_URL_TEMPLATE, apiKey);

		        headers.set("Content-Type", "application/json");

		        
		        partsNode.put("text", prompt);
		        contentNode.set("parts", objectMapper.createArrayNode().add(partsNode));
		        ObjectNode requestBodyNode = objectMapper.createObjectNode();
		        requestBodyNode.set("contents", objectMapper.createArrayNode().add(contentNode));
		        
		        
	            requestBody 	= 	objectMapper.writeValueAsString(requestBodyNode);
	            
	            request 		= 	new HttpEntity<>(requestBody, headers);

	            ResponseEntity<String> response = restTemplate.exchange(apiUrl, HttpMethod.POST, request, String.class);
	            GeminiResponse geminiResponse = objectMapper.readValue(response.getBody(), GeminiResponse.class);

	            // Extract the text
	            String text		 = 	geminiResponse.getCandidates().get(0).getContent().getParts().get(0).getText();
	            
	            responseData	 = 	text;
			
		}
		catch(IOException e) {
			
		}
		return responseData;
		
	}


    public static String cleanJSXCode(String code) {
        // Step 1: Remove the "use client" directive
        String clientDirectivePattern = "\"use client\";?\\n?";
        Pattern clientPattern = Pattern.compile(clientDirectivePattern);
        Matcher clientMatcher = clientPattern.matcher(code);
        String clientDirective = clientMatcher.find() ? clientMatcher.group() : "";
        code = code.replace(clientDirective, "");

        // Step 2: Remove the useState import
        String useStateImportPattern = "import\\s*\\{\\s*useState\\s*\\}\\s*from\\s*['\"]react['\"];\\n?";
        Pattern useStatePattern = Pattern.compile(useStateImportPattern);
        Matcher useStateMatcher = useStatePattern.matcher(code);
        String useStateImport = useStateMatcher.find() ? useStateMatcher.group() : "";
        code = code.replace(useStateImport, "");

        // Step 3: Replace <br> with </br>
        String brTagPattern = "<br\\s*/?>";
        String stylePattern = "style";
        code = code.replaceAll(brTagPattern, "<br/>");
        code =code.replaceAll(stylePattern, "className");

        // Step 4: Construct the cleaned code by placing the JavaScript logic back at the top
        StringBuilder cleanedCode = new StringBuilder();
        if (!useStateImport.isEmpty()) {
            cleanedCode.append(useStateImport);
        }
        if (!clientDirective.isEmpty()) {
            cleanedCode.append(clientDirective);
        }
        cleanedCode.append(code);

        return cleanedCode.toString();
    }
	
    
    public void commitFileToTheGithub() {
    	
    	  ProcessBuilder processBuilder = new ProcessBuilder(commitFilePath);

          try {
              // Start the process
              Process process = processBuilder.start();

              // Capture the output of the shell script
              BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
              String line;
              while ((line = reader.readLine()) != null) {
                  System.out.println(line);
              }

              // Capture the error stream of the shell script
              BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
              while ((line = errorReader.readLine()) != null) {
                  System.err.println(line);
              }

              // Wait for the process to complete and get the exit value
              int exitCode = process.waitFor();
              System.out.println("Shell script exited with code: " + exitCode);

          } catch (IOException | InterruptedException e) {
              e.printStackTrace();
          }
    	
    }
    


    public void sendMessage(String message) {
        String urlString = String.format(TELEGRAM_API_URL, botToken, chatId, message);
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getForObject(urlString, String.class);
    }

    
    public static String getValueInsideParentheses(String input) {
    	if(input==null)return null;
    	
    	String response		=	null;
        Pattern pattern		= 	Pattern.compile("\\((.*?)\\)"); 
        Matcher matcher 	= 	pattern.matcher(input);

        if (matcher.find()) {
            response	= matcher.group(1);
            
            return response;
            
        }

        return response;
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
	
	 
		public String handleSingleBacktickResponse(String aiResponse) {
		    int count = countTripleBackticks(aiResponse);
		    int defaultMinux=2000;

		    while (count != 2) {
		        // Cut the response to half its current length
		        aiResponse = aiResponse.substring(0, aiResponse.length()-defaultMinux);
		        System.out.println("Truncated AI Response Length: " + aiResponse.length());

		        // Send the request again for validation
		        aiResponse = getTheAiRequest(String.format(PROMPT_FOR_VALIDATION, aiResponse));
		        System.out.println("Validated AI Response Length: " + aiResponse.length());

		        // Count occurrences of triple backticks again
		        count = countTripleBackticks(aiResponse);
		        System.out.println("Triple Backticks Count after validation: " + count);
		        defaultMinux+=2000;
		    }

		    // If we exit the loop with count == 2, return the cleaned response
		    return (count == 2) ? aiResponse : null;
		}

	
    
}
