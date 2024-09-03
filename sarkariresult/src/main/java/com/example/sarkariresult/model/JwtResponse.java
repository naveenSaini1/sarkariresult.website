package com.example.sarkariresult.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Author: Naveen Saini
 * Date: 23-Aug-2024	
 */

@Getter
@Setter

@NoArgsConstructor

public class JwtResponse {
	  private String token;
	  private String type = "Bearer";
	  private String email;
	  private String roles;
	  
	  public JwtResponse(String accessToken , String email, String roles) {
		    this.token = accessToken;
		    this.email = email;
		    this.roles = roles;
		  }

	  

}
