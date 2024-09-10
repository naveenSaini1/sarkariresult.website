package com.example.sarkariresult.service;

import java.util.List;

import com.example.sarkariresult.model.TodayUpdateModel;

/**
 * Author: Naveen Saini
 * Date: 10-Sep-2024	
 */
public interface TodayUpdateService {
	public Integer		inserIntoTodayUpdateService(String content,String date);
	public Integer		selectIfTheCotnentAndTheDateIsExist(String content,String date);
	public TodayUpdateModel getTheTodayContent();

}
