package com.example.sarkariresult.repositaryimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.sarkariresult.constatns.SqlConstants;
import com.example.sarkariresult.model.TodayUpdateDto;
import com.example.sarkariresult.repositary.TodayUpdateRepo;
import com.example.sarkariresult.rowmapper.TodayUpdateRowMapper;

/**
 * Author: Naveen Saini
 * Date: 10-Sep-2024	
 */
@Repository
public class TodayUpdateRepoImpl implements TodayUpdateRepo {
	
	@Autowired
	private JdbcTemplate  jdbcTemplate;
	
	@Autowired
	private SqlConstants	sqlConstants;

	@Override
	public Integer insertInotTodayUpdate(String url,String content, String date) {
		Object[]		data	=	{url,content,date};
		
		return jdbcTemplate.update(sqlConstants.INSERT_INTO_TODAY_UPDATE,data);
	}

	@Override
	public Integer checkIfTheContentAndDateExist(String content, String date) {
		Object[]		data	=	{content,date};
		
		return jdbcTemplate.query(sqlConstants.SELECT_COUNT_IF_THE_TODAY_UPDATE_EXIST,new TodayUpdateRowMapper.getTheTotalNumber(),data);
	}

	@Override
	public List<TodayUpdateDto> getTheConentOfToday(String mtachingDate) {
		Object[]		data	=	{mtachingDate};
		return jdbcTemplate.query(sqlConstants.GET_THE_TODAY_CONTENT_OF_TODAY_UPDATE,new TodayUpdateRowMapper.GetTheListContent(), data);
	}

	@Override
	public Integer getTheTotalItems() {
		return jdbcTemplate.query(sqlConstants.GET_THE_MATCHING_DATE_TOTOAL,new TodayUpdateRowMapper.getTheTotalNumber());
	}

	@Override
	public List<String> getTheMathicngDate(Integer limit, Integer offset) {
		Object[]		data	=	{limit,offset};
		return jdbcTemplate.query(sqlConstants.GET_THE_MATCHING_DATES, new TodayUpdateRowMapper.getTheTotalMatchingList(),data);
	}

}
