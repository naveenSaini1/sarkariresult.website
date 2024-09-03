package com.example.sarkariresult.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sarkariresult.constatns.CategorysConstants;
import com.example.sarkariresult.constatns.DefaultConstants;
import com.example.sarkariresult.model.Post;
import com.example.sarkariresult.repositary.PostRepo;
import com.example.sarkariresult.service.PostService;

/**
 * Author: Naveen Saini
 * Date: 25-Aug-2024	
 */
@Service
public class PostServiceImpl implements PostService{
	
	@Autowired
	private		PostRepo		postRepo;

	@Override
	public List<Post> getTheNewPost(Integer page) {
		
		Integer									defualMessageLimit	=	DefaultConstants.DEFAULT_LIMIT_FOR_POST;
		Integer									offset				=	(page==1)?0:(page-1)*defualMessageLimit;
		
		
		
		return postRepo.getTheTopPost();
	}

	@Override
	public List<String> getTheListOfState() {
		return new CategorysConstants().getAllTheState();
	}

	@Override
	public List<String> getTheListOfCenter() {
		return new CategorysConstants().getTheAllCenter();
	}

	@Override
	public List<Post> getThePostByCourse(String courseName, Integer page) throws Exception {
		Integer									defualMessageLimit	=	DefaultConstants.DEFAULT_LIMIT_FOR_POST;
		Integer									offset				=	(page==1)?0:(page-1)*defualMessageLimit;
		Integer								    courseId			=   0;
		
		courseId		=	new CategorysConstants().getTheCategoryIdMap().get(courseName);
		
		if(courseId==null) throw new Exception("Something Went Wrong");
		
		
		return postRepo.getThePostByCourseId(courseId, defualMessageLimit, offset);
	}

	@Override
	public List<Post> getTheBulkPost() {
		return postRepo.getTheBulkPost();
	}

	@Override
	public Integer getThePaginationTotoal(String categoryName) throws Exception {
		Integer		categoryId			=   0;
		Integer 	totalPage			=	0;

		categoryId		=	new CategorysConstants().getTheCategoryIdMap().get(categoryName);
		
		if(categoryId==null) throw new Exception("Something Went Wrong");		
		
		totalPage	=	postRepo.getTheTotalNumber(categoryId);
		totalPage 	=(int)Math.ceil((double)totalPage/DefaultConstants.DEFAULT_LIMIT_FOR_POST);
		return totalPage;
	}

	@Override
	public List<Post> searchThePost(String query, Integer page) throws Exception {
		Integer									defualMessageLimit	=	DefaultConstants.DEFAULT_LIMIT_FOR_POST;
		Integer									offset				=	(page==1)?0:(page-1)*defualMessageLimit;
		

		
		if(query==null || query.trim().equals("") || page==null) throw new Exception("Something Went Wrong");
		
		
		return postRepo.searchTheQuery(query, defualMessageLimit, offset);
	}

	@Override
	public Integer getTheSearchPaginationTotoal(String query) throws Exception {
		Integer 	totalPage			=	0;
		totalPage	=	postRepo.getTheSearchTotalNumber(query);
		totalPage 	=(int)Math.ceil((double)totalPage/DefaultConstants.DEFAULT_LIMIT_FOR_POST);
		return totalPage;
	}
	

}
