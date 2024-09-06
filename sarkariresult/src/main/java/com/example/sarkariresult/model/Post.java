package com.example.sarkariresult.model;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Author: Naveen Saini
 * Date: 25-Aug-2024	
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Post {
	private Integer postId;
	private String url;
	private String title;
	private Timestamp timestamp;

}
