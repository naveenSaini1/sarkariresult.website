package com.example.sarkariresult.repositaryimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.sarkariresult.constatns.SqlConstants;
import com.example.sarkariresult.model.CoursePost;
import com.example.sarkariresult.model.Post;
import com.example.sarkariresult.repositary.PostRepo;
import com.example.sarkariresult.rowmapper.PostRowMapper;

/**
 * Author: Naveen Saini
 * Date: 25-Aug-2024	
 */
@Repository
public class PostRepoImple implements PostRepo {
	
	@Autowired
	private JdbcTemplate  jdbcTemplate;
	
	@Autowired
	private SqlConstants	sqlConstants;
	
	 

	@Override
	public Integer insertIntoPost(String href,String OriginolTitle, String url, String newTitle,Integer totalPost,Integer active,String exiparyDate) {
		Object[]		data	=	{href,OriginolTitle,url,newTitle,totalPost,active,exiparyDate};
		try
		{
			return jdbcTemplate.update(sqlConstants.INSERT_INTO_POST,data);

		}
		catch(Exception i) {
			System.out.println("error in insertinot post table");
		
		}
		return 0;
	}



	@Override
	public List<Post> getTheTopPost(Integer page,Integer offset) {
		Object[]		data= {page,offset};
		
		
		return jdbcTemplate.query(sqlConstants.GET_THE_LATEST_POST, new PostRowMapper.GetThePosts(),data);
	}


	  /**
     * Batch insert records into the database.
     *
     * @param records List of MyRecord objects to insert.
     */
	@Override
    public Integer insertIntoCoursePostId(List<CoursePost> corusePostRecords) {
        
        // Using batchUpdate with BatchPreparedStatementSetter to perform batch insert
        jdbcTemplate.batchUpdate(sqlConstants.INSERT_INTO_COURSE_POST, new PostRowMapper.InsertIntoCousePost(corusePostRecords));
       
       return 0;
	}



	@Override
	public List<Post> getThePostByCourseId(Integer coruseId, Integer limit, Integer offset) {
		Object[]				data	=	{coruseId,limit,offset};
		
		return jdbcTemplate.query(sqlConstants.FIND_THE_POST_BY_COURSE_ID,new PostRowMapper.GetThePosts(),data);
	}



	@Override
	public Integer updateThePostForBulk(String oUrl) {
		Object[]		data	=	{oUrl};

		return jdbcTemplate.update(sqlConstants.UPDATE_THE_POST_ACTIVE,data);
	}



	@Override
	public List<Post> getTheBulkPostForActive() {
		// TODO Auto-generated method stub
		return jdbcTemplate.query(sqlConstants.GET_THE_BULK_POST,new PostRowMapper.GetThePosts());
	}



	@Override
	public Integer getTheTotalNumber(Integer categoryId) {
		
		return jdbcTemplate.query(sqlConstants.GET_TOTOAL_POST_BY_COURSE_ID_FOR_PAGINATION,new PostRowMapper.GetThePaginationTotoalPost(), new Object[] {categoryId});
	}



	@Override
	public String checkIfThePostIsPresent(String href) {
		return jdbcTemplate.query(sqlConstants.CHECK_IF_THE_POST_PRESENT, new PostRowMapper.CheckIfTheUrlIsPresent(),new Object[] {href});
	}



	@Override
	public List<Post> searchTheQuery(String query, Integer limit, Integer offset) {
		Object[]				data	=	{query,limit,offset};

		return jdbcTemplate.query(sqlConstants.SEARCH_THE_POST,new PostRowMapper.GetThePosts(),data );
	}



	@Override
	public Integer getTheSearchTotalNumber(String query) {
		
		return jdbcTemplate.query(sqlConstants.GET_THE_TOTAL_NUMBER_OF_SEARCH, new PostRowMapper.GetThePaginationTotoalPost(), new Object[] {query});
	}



	@Override
	public Integer updateAllTheActive() {
		return jdbcTemplate.update(sqlConstants.UPDATE_ALL_THE_ACTIVE_IF_IT_ACTIVE);
	}



	@Override
	public List<Post> getTheBulkPostSitemMap() {
		return jdbcTemplate.query(sqlConstants.GET_THE_ALL_POST_FOR_SITEMAP,new PostRowMapper.GetThePostsffForSitemap());
	}



	@Override
	public Integer getTheTotalNumberPage() {
		return jdbcTemplate.query(sqlConstants.GET_TOTOAL_PAGES,new PostRowMapper.GetThePaginationTotoalPost());
	}







	

}
