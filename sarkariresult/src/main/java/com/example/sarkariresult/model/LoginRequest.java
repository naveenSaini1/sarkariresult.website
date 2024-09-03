package com.example.sarkariresult.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * Author: Naveen Saini
 * Date: 23-Aug-2024	
 */

@Getter
@Setter
@ToString
public class LoginRequest {
	  private String username;
	  private String password;
}
