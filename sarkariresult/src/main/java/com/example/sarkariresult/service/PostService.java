package com.example.sarkariresult.service;
/**
 * Author: Naveen Saini
 * Date: 25-Aug-2024	
 */

import java.util.List;

import com.example.sarkariresult.model.Post;

public interface PostService {
	
	public List<Post> 	getTheNewPost(Integer page);
	
	public List<String> getTheListOfState();
	
	public List<String> getTheListOfCenter();
	
	public List<Post> getThePostByCourse(String courseName,Integer page) throws Exception;
	
	public List<Post> getTheBulkPostForActive();
	
	public Integer	getThePaginationTotoal(String categoryName) throws Exception;
	
	public Integer	getThePaginationTotoalPages() throws Exception;

	
	
	public List<Post> searchThePost(String query,Integer page) throws Exception;
	
	public Integer	getTheSearchPaginationTotoal(String query) throws Exception;
	
	public List<Post> getTheBulkPostForSiteMap();




}
