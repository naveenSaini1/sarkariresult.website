package com.example.sarkariresult.repositary;

import java.util.List;

/**
 * Author: Naveen Saini
 * Date: 10-Sep-2024	
 */
public interface TodayUpdateRepo {
	
	public Integer insertInotTodayUpdate(String content,String date);	
	
	public Integer checkIfTheContentAndDateExist(String content,String date);

	public List<String> getTheConentOfToday(String mtachingDate);
}
