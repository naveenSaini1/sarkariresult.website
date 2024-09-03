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

import java.io.IOException;
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
	


}
