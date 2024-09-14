package com.example.sarkariresult.rowmapper;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.ResultSetExtractor;

import com.example.sarkariresult.model.CoursePost;
import com.example.sarkariresult.model.Post;

/**
 * Author: Naveen Saini
 * Date: 25-Aug-2024	
 */
public class PostRowMapper {
	
	public static class GetThePosts implements ResultSetExtractor<List<Post>>{

		@Override
		public List<Post> extractData(ResultSet rs) throws SQLException, DataAccessException {
			List<Post>			response		=	new ArrayList<>();
			while(rs.next()) {
				Post		post	= new Post();
				post.setTitle(rs.getString("newtitile"));
				post.setUrl(rs.getString("url"));
				response.add(post);
			}
			return response;
		}
		
	}
	
	public static class GetThePostsffForSitemap implements ResultSetExtractor<List<Post>>{

		@Override
		public List<Post> extractData(ResultSet rs) throws SQLException, DataAccessException {
			List<Post>			response		=	new ArrayList<>();
			while(rs.next()) {
				Post		post	= new Post();
				post.setTitle(rs.getString("newtitile"));
				post.setUrl(rs.getString("url"));
				post.setTimestamp(rs.getTimestamp("createtime"));
				response.add(post);
			}
			return response;
		}
		
	}
	
	public static class InsertIntoCousePost implements BatchPreparedStatementSetter{
	   
		private final List<CoursePost> records;
		
		public InsertIntoCousePost(List<CoursePost> records) {
			this.records=records;
			
		}


		 @Override
		    public void setValues(PreparedStatement ps, int i) throws SQLException {
		        CoursePost record = records.get(i);
		        
		      
		       
		        ps.setString(1, record.getOrigionalPostId());
		        ps.setInt(2, record.getCourseId());
		    }

		    @Override
		    public int getBatchSize() {
		        return records.size();
		    }
		
	}
	
	public static class GetThePaginationTotoalPost implements ResultSetExtractor<Integer>{

		@Override
		public Integer extractData(ResultSet rs) throws SQLException, DataAccessException {
			while(rs.next()) {
				return rs.getInt("total");
				
			}
			return 0;
		}
		
	}
	
	public static class GetTheUrlByLink implements ResultSetExtractor<String>{

		@Override
		public String extractData(ResultSet rs) throws SQLException, DataAccessException {
			while(rs.next()) {
				return rs.getString("url");
				
			}
			return null;
		}
		
	}
	

	public static class CheckIfTheUrlIsPresent implements ResultSetExtractor<String>{

		@Override
		public String extractData(ResultSet rs) throws SQLException, DataAccessException {
			while(rs.next()) {
				return rs.getString("url");
				
			}
			return null;
		}
		
	}

}
