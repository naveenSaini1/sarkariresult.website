package com.example.sarkariresult.utility;

import org.springframework.stereotype.Component;

import com.vladsch.flexmark.html.HtmlRenderer;
import com.vladsch.flexmark.html2md.converter.FlexmarkHtmlConverter;
import com.vladsch.flexmark.parser.Parser;

/**
 * Author: Naveen Saini
 * Date: 24-Aug-2024	
 */

@Component
public class HtmlMarkDown{
	
    public String convertHtmlToMarkdown(String htmlContent) {
        FlexmarkHtmlConverter converter = FlexmarkHtmlConverter.builder().build();
        return converter.convert(htmlContent);
    }

    public String convertMarkdownToHtml(String markdownContent) {
        Parser parser = Parser.builder().build();
        HtmlRenderer renderer = HtmlRenderer.builder().build();
        return renderer.render(parser.parse(markdownContent));
    }
    
//    public String convertMarkdownToHtmlPeg(String markdownContent) {
//        PegDownProcessor processor = new PegDownProcessor();
//        return processor.markdownToHtml(markdownContent);
//    }

	

}
