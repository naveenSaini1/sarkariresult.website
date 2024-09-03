package com.example.sarkariresult.utility;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.example.sarkariresult.enums.ResponseType;
import com.example.sarkariresult.model.ResponseMessage;

/**
 * Author: Naveen Saini
 * Date: 23-Aug-2024	
 */
@Component
public class MessageMapper {
	
	public <T> Map<String, ResponseMessage<T>> mapperForResponseMessage(ResponseMessage<T> responseMessage){
		Map<String,ResponseMessage<T>>		response			=		new HashMap<>();;
		ResponseMessage<T>		needToAddInResponse			=		responseMessage;
			response.put(ResponseType.RESPONSE.toString(), needToAddInResponse);
			return response;
		
	}

}
