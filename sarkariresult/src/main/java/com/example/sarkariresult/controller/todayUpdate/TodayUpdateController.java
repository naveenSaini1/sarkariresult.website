package com.example.sarkariresult.controller.todayUpdate;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sarkariresult.model.Post;
import com.example.sarkariresult.model.TodayUpdateDto;
import com.example.sarkariresult.model.TodayUpdateModel;
import com.example.sarkariresult.service.TodayUpdateService;

/**
 * Author: Naveen Saini
 * Date: 10-Sep-2024	
 */

@RestController
@RequestMapping("/api/public")
public class TodayUpdateController {
	
	@Autowired
	private	TodayUpdateService		todayUpdateService;
	
	@GetMapping("/getTheTodayUpdateContent")
	public ResponseEntity<TodayUpdateModel> getTheTodayUpdateContent(){
		return new ResponseEntity<TodayUpdateModel>(todayUpdateService.getTheTodayContent(),HttpStatus.OK);
	}
	
	@GetMapping("/getTheTodayUpdateTotalNumber")
	public ResponseEntity<Integer> getTheTodayUpdateTotalNumber(){
		return new ResponseEntity<Integer>(todayUpdateService.getTheTotalPagesOfMatcingDates(),HttpStatus.OK);
	}
	
	@GetMapping("/getTheAllMatchingDates/{page}")
	public ResponseEntity<List<String>> getTheAllMatchingDates(@PathVariable("page") Integer page){
		return new ResponseEntity<List<String>>(todayUpdateService.getTheAllMatchingDates(page),HttpStatus.OK);
	}
	@GetMapping("/getTheUpdatesByMatchingDate/{matchingDate}")
	public ResponseEntity<List<TodayUpdateDto>> getTheUpdatesByMatchingDate(@PathVariable("matchingDate") String matchingDate){
		return new ResponseEntity<List<TodayUpdateDto>>(todayUpdateService.getTheTodayUpdateByMatchingDate(matchingDate),HttpStatus.OK);
	}
	
	
	
	
	

}
