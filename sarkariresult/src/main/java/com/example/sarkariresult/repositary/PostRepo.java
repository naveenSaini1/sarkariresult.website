package com.example.sarkariresult.repositary;
/**
 * Author: Naveen Saini
 * Date: 25-Aug-2024	
 */

import java.util.List;

import com.example.sarkariresult.model.CoursePost;
import com.example.sarkariresult.model.Post;

public interface PostRepo {
	
	public Integer insertIntoPost(String href,String OriginolTitile,String url,String newTitile,Integer totalPost,Integer active,String expiaryDate);
	public List<Post>		getTheTopPost(Integer page,Integer offset);
	public Integer insertIntoCoursePostId(List<CoursePost> corusePostRecords);
	
	public List<Post>		getThePostByCourseId(Integer coruseId,Integer limit,Integer offset);
	
	public Integer			updateThePostForBulk(String oUrl);
	
	public List<Post>		getTheBulkPostForActive();
	
	public Integer		getTheTotalNumber(Integer categoryId);
	
	public String		checkIfThePostIsPresent(String href);
	
	public List<Post>	searchTheQuery(String query,Integer limit ,Integer offset);
	
	public Integer		getTheSearchTotalNumber(String query);
	
	public Integer		updateAllTheActive();
	
	public List<Post>		getTheBulkPostSitemMap();
	
	public Integer		getTheTotalNumberPage();



}
