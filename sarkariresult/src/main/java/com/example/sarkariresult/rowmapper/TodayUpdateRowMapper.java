package com.example.sarkariresult.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;

import com.example.sarkariresult.model.TodayUpdateDto;

/**
 * Author: Naveen Saini
 * Date: 10-Sep-2024	
 */
public class TodayUpdateRowMapper {
	public static class getTheTotalNumber implements ResultSetExtractor<Integer>{

		@Override
		public Integer extractData(ResultSet rs) throws SQLException, DataAccessException {
			while(rs.next()) {
				return rs.getInt("total");
				
			}
			return 0;
		}
		
	}
	
	public static class GetTheListContent implements ResultSetExtractor<List<TodayUpdateDto>>{

		@Override
		public List<TodayUpdateDto> extractData(ResultSet rs) throws SQLException, DataAccessException {
			List<TodayUpdateDto>	response	=	 new ArrayList<>();
			while(rs.next()) {
				TodayUpdateDto		obj	= new TodayUpdateDto();
				obj.setUrl(rs.getString("url"));
				obj.setContent(rs.getString("content"));
				response.add(obj);
							
			}
			return response;
		}
		
	}
	
	public static class getTheTotalMatchingList implements ResultSetExtractor<List<String>>{

		@Override
		public List<String> extractData(ResultSet rs) throws SQLException, DataAccessException {
			List<String>		response	=	new ArrayList<>();
			while(rs.next()) {
				response.add(rs.getString("matchingdate"));
				
			}
			return response;
		}
		
	}

}
