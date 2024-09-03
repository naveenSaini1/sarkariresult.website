package com.example.sarkariresult.model;

import com.example.sarkariresult.enums.ResponseType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * Author: Naveen Saini
 * Date: 23-Aug-2024	
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ResponseMessage <T> {
	private ResponseType responseType;
	private String message;
	private T data;
}
