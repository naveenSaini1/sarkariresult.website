package com.example.sarkariresult.controller.scrabdata;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sarkariresult.service.ScrabDataService;
import com.example.sarkariresult.service.TodayUpdateService;
import com.example.sarkariresult.utility.CommonUtilityMethods;
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
	private	TodayUpdateService	todayUpdateService;
	
	
	@Autowired
	private FindCategory			findCategory;
	
	@Autowired
	private	CommonUtilityMethods	commonUtilityMethods;
	
	
	@GetMapping("/getTheNewUpdatePost")
	@Scheduled(cron = "0 0 * * * *") 
	public ResponseEntity<String> getTheNewUpdatePost(){
		System.out.println("the getTheNewUpdatePost has start"+new Date().toLocaleString());
		try {
		    Integer count = scrabDataService.getTheData();
		    if (count > 0) {
		        commonUtilityMethods.commitFileToTheGithub();
		    }
			System.out.println("the getTheNewUpdatePost has end"+new Date().toLocaleString());
		} catch (Exception e) {
		    System.out.println("An error occurred: {}"+ e.getMessage());
		    return new ResponseEntity<>("Error occurred while processing", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	    return new ResponseEntity<>("getTheNewUpdatePost", HttpStatus.OK);


	}
	
	
	@GetMapping("/getTheActivePost")
	@Scheduled(cron = "0 30 * * * *") 
	public ResponseEntity<String> getTheActivePost(){
		System.out.println("the getht activ post has start"+new Date().toLocaleString());
		scrabDataService.getTheActivePost();
		todayUpdateService.getTheTodayPostUpdate();
		System.out.println("the getht activ post has end"+new Date().toLocaleString());

		return new ResponseEntity<String>(new String("getTheActivePost"),HttpStatus.OK);

	}
	
	@GetMapping("/indexingCategory")
	public ResponseEntity<String> indexingCategory() throws Exception{
		findCategory.updateCategory();
		return new ResponseEntity<String>(new String("indexingCategory"),HttpStatus.OK);

	}
	
	@GetMapping("/getTheHaryanaTodayUpdate")
	public ResponseEntity<String> getTheHaryanaTodayUpdate() throws Exception{
		todayUpdateService.getTheTodayPostUpdate();
		return new ResponseEntity<String>(new String("indexingCategory"),HttpStatus.OK);

	}
	
	
	
	
//	@GetMapping("/checkingCommitFile")
//	public ResponseEntity<String> checkingCommitFile() throws Exception{
//		commonUtilityMethods.commitFileToTheGithub();
//		return new ResponseEntity<String>(new String("checkingCommitFile"),HttpStatus.OK);
//
//	}

}
