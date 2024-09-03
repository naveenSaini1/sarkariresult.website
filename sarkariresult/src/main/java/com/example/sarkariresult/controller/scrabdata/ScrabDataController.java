package com.example.sarkariresult.controller.scrabdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sarkariresult.service.ScrabDataService;
import com.example.sarkariresult.utility.FindCategory;

/**
 * Author: Naveen Saini
 * Date: 23-Aug-2024	
 */
@RestController
@RequestMapping("/api/scrab")
public class ScrabDataController {
	
	@Autowired
	private	ScrabDataService	scrabDataService;
	
	
	@Autowired
	private FindCategory			findCategory;
	
	
	@GetMapping("/getTheNewUpdatePost")
	public ResponseEntity<String> getTheNewUpdatePost(){
		scrabDataService.getTheData();
		return new ResponseEntity<String>(new String("getTheNewUpdatePost"),HttpStatus.OK);
	}
	
	
	@GetMapping("/getTheActivePost")
	public ResponseEntity<String> getTheActivePost(){
		
		scrabDataService.getTheActivePost();
		
		return new ResponseEntity<String>(new String("getTheActivePost"),HttpStatus.OK);

	}
	
	@GetMapping("/indexingCategory")
	public ResponseEntity<String> indexingCategory() throws Exception{
		findCategory.updateCategory();
		return new ResponseEntity<String>(new String("indexingCategory"),HttpStatus.OK);

	}

}
