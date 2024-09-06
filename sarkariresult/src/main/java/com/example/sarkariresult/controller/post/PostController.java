package com.example.sarkariresult.controller.post;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.sarkariresult.model.Post;
import com.example.sarkariresult.service.PostService;

/**
 * Author: Naveen Saini
 * Date: 25-Aug-2024	
 */
@RestController
@RequestMapping("/api/public")
public class PostController {
	
	@Autowired
	private PostService 	postService;
	
	
	@GetMapping("/getThePost/{page}")
	public ResponseEntity<List<Post>> getThePost(@PathVariable("page") Integer page){
		return new ResponseEntity<List<Post>>(postService.getTheNewPost(page),HttpStatus.OK);
	}
	
//	 @Scheduled(fixedRate = 10000)
//	    public void runTaskWithFixedRate() {
//	        System.out.println("Task executed with fixed rate - " + System.currentTimeMillis() / 1000);
//	    }
//	
	
	@GetMapping("/getTheStateList")
	public ResponseEntity<List<String>> getTheStateList(){
		return new ResponseEntity<List<String>>(postService.getTheListOfState(),HttpStatus.OK);
	}
	
	@GetMapping("/getTheCenterList")
	public ResponseEntity<List<String>> getTheCenterList(){
		return new ResponseEntity<List<String>>(postService.getTheListOfCenter(),HttpStatus.OK);
	}
	
	
	@GetMapping("/getThePostByCourse/{courseName}/{page}")
	public ResponseEntity<List<Post>> getThePostByCourse(@PathVariable("courseName") String courseName,@PathVariable("page") Integer page) throws Exception{
		System.out.println(courseName+"   "+page);
		return new ResponseEntity<List<Post>>(postService.getThePostByCourse(courseName,page),HttpStatus.OK);
	}
	@GetMapping("/getTheBulkPost")
	public ResponseEntity<List<Post>> getTheBulkPostActive() throws Exception{
		return new ResponseEntity<List<Post>>(postService.getTheBulkPostForActive(),HttpStatus.OK);
	}
	
	
	@GetMapping("/getThePostForSiteMap")
	public ResponseEntity<List<Post>> getThePostForSiteMap() throws Exception{
		return new ResponseEntity<List<Post>>(postService.getTheBulkPostForSiteMap(),HttpStatus.OK);
	}
	
	

	@GetMapping("/getTheTotalNumberPagination/{categoryName}")
	public ResponseEntity<Integer> getTheTotalNumberPagination(@PathVariable("categoryName") String categoryName) throws Exception{
		
		return new ResponseEntity<Integer>(postService.getThePaginationTotoal(categoryName),HttpStatus.OK);
	}
	
	@GetMapping("/getTheTotalNumberPages")
	public ResponseEntity<Integer> getTheTotalNumberPages() throws Exception{
		
		return new ResponseEntity<Integer>(postService.getThePaginationTotoalPages(),HttpStatus.OK);
	}
	@PostMapping("/searchThePost")
	public ResponseEntity<List<Post>> 	searchThePost(@RequestParam("query") String query,@RequestParam("page") Integer page) throws Exception{
		
		return new ResponseEntity<List<Post>>(postService.searchThePost(query, page),HttpStatus.OK);
		
	}
	
	@PostMapping("/searchThePostTotalNumberPagination")
	public ResponseEntity<Integer> searchThePostTotalNumberPagination(@RequestParam("query") String query) throws Exception{
		
		return new ResponseEntity<Integer>(postService.getTheSearchPaginationTotoal(query),HttpStatus.OK);
	}
	
	
	
}
