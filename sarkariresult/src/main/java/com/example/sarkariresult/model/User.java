package com.example.sarkariresult.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Author: Naveen Saini
 * Date: 23-Aug-2024	
 */

@NoArgsConstructor
@Getter
@Setter
public class User {
	private Integer u_id;
	private String name;
	private String email;
	private String bio;
	private Integer age;
	private String password;
	private String role;
	private String okay;

	


}
