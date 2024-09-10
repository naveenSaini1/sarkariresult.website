package com.example.sarkariresult.serviceimpl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sarkariresult.model.TodayUpdateModel;
import com.example.sarkariresult.repositary.TodayUpdateRepo;
import com.example.sarkariresult.service.TodayUpdateService;

/**
 * Author: Naveen Saini
 * Date: 10-Sep-2024	
 */

@Service
public class TodayUpdateServiceImpl implements TodayUpdateService {
	
	@Autowired
	private	TodayUpdateRepo		todayUpdateRepo;
	

	@Override
	public Integer inserIntoTodayUpdateService(String content, String date) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer selectIfTheCotnentAndTheDateIsExist(String content, String date) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TodayUpdateModel getTheTodayContent() {
		TodayUpdateModel	response		= new TodayUpdateModel();
		
		 LocalDate		time				= LocalDate.now();
		 String			validateItsToday	= time.getDayOfMonth()+"."+time.getMonthValue()+"."+time.getYear();
		 response.setDate(validateItsToday);
		 response.setContent(todayUpdateRepo.getTheConentOfToday(validateItsToday));
		 return response;
	}

	
}
