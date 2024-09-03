package com.example.sarkariresult.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Author: Naveen Saini
 * Date: 02-Sep-2024	
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Contact {
	
	private String name;
	private String surname;
	private String email;
	private String message;

}
