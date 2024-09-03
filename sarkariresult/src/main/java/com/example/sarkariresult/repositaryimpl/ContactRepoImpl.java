package com.example.sarkariresult.repositaryimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.sarkariresult.constatns.SqlConstants;
import com.example.sarkariresult.repositary.ContactRepo;

/**
 * Author: Naveen Saini
 * Date: 02-Sep-2024	
 */

@Repository
public class ContactRepoImpl implements ContactRepo {

	
	@Autowired
	private JdbcTemplate  jdbcTemplate;
	
	@Autowired
	private SqlConstants	sqlConstants;
	
	
	@Override
	public Integer insertContactMessage(String name, String surname, String email, String message) {
		Object[]			data	=	{name,surname,email,message};
		return jdbcTemplate.update(sqlConstants.INSERT_MESSAGE_INTO_CONTACT,data);
	}
	
	

}
