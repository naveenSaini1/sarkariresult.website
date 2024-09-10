package com.example.sarkariresult.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Author: Naveen Saini
 * Date: 10-Sep-2024	
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TodayUpdateModel {
	 private String 		date;
	 private List<String>	content; 
	

}
