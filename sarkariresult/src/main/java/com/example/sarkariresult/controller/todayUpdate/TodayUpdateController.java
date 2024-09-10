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
	

}
