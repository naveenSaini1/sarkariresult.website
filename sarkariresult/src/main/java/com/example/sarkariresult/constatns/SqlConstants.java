package com.example.sarkariresult.constatns;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

/**
 * Author: Naveen Saini 
 * Date: 25-Apr-2024
 */

@Component
@PropertySource("classpath:sql.properties")
public class SqlConstants {
	// users query
    @Value("${INSERT_INTO_POST}")
	public		 String			 INSERT_INTO_POST;
    
    @Value("${GET_THE_LATEST_POST}")
    public		String			GET_THE_LATEST_POST;
    
    @Value("${INSERT_INTO_COURSE_POST}")
    public		String			INSERT_INTO_COURSE_POST;
    
    @Value("${FIND_THE_POST_BY_COURSE_ID}")
    public		String			FIND_THE_POST_BY_COURSE_ID;
    
    @Value("${UPDATE_THE_POST_ACTIVE}")
    public		String			UPDATE_THE_POST_ACTIVE;
    
    @Value("${GET_THE_BULK_POST}")
    public		String			GET_THE_BULK_POST;
    
    @Value("${GET_TOTOAL_POST_BY_COURSE_ID_FOR_PAGINATION}")
    public		String			GET_TOTOAL_POST_BY_COURSE_ID_FOR_PAGINATION;
    
    @Value("${CHECK_IF_THE_POST_PRESENT}")
    public		String			CHECK_IF_THE_POST_PRESENT;
    
    @Value("${SEARCH_THE_POST}")
    public		String			SEARCH_THE_POST;
    
    @Value("${GET_THE_TOTAL_NUMBER_OF_SEARCH}")
    public		String			GET_THE_TOTAL_NUMBER_OF_SEARCH;
    
    // contact
    
    @Value("${INSERT_MESSAGE_INTO_CONTACT}")
    public		String			INSERT_MESSAGE_INTO_CONTACT;
}

