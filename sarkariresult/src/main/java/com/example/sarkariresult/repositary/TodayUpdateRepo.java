package com.example.sarkariresult.repositary;

import java.util.List;

import com.example.sarkariresult.model.TodayUpdateDto;

/**
 * Author: Naveen Saini
 * Date: 10-Sep-2024	
 */
public interface TodayUpdateRepo {
	
	public Integer insertInotTodayUpdate(String url,String content,String date);	
	
	public Integer checkIfTheContentAndDateExist(String content,String date);

	public List<TodayUpdateDto> getTheConentOfToday(String mtachingDate);
	public Integer getTheTotalItems();
	public List<String> getTheMathicngDate(Integer limit,Integer offset);
}
