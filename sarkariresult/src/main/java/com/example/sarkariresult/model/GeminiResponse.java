package com.example.sarkariresult.model;
/**
 * Author: Naveen Saini
 * Date: 23-Aug-2024	
 */

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString

@JsonIgnoreProperties(ignoreUnknown = true)
public class GeminiResponse {
	  private List<Candidate> candidates;


      @JsonIgnoreProperties(ignoreUnknown = true)
	    public static class Candidate {
	        private Content content;
	        


	        public Content getContent() {
				return content;
			}


			public void setContent(Content content) {
				this.content = content;
			}

            @JsonIgnoreProperties(ignoreUnknown = true)
			public static class Content {
	            private List<Part> parts;
	            


	            public List<Part> getParts() {
					return parts;
				}


				public void setParts(List<Part> parts) {
					this.parts = parts;
				}

				
	            @JsonIgnoreProperties(ignoreUnknown = true)
				public static class Part {
	                private String text;

					public String getText() {
						return text;
					}

					public void setText(String text) {
						this.text = text;
					}

	            }
	        }

			
	    }

}
