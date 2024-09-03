package com.example.sarkariresult.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sarkariresult.model.Contact;
import com.example.sarkariresult.repositary.ContactRepo;
import com.example.sarkariresult.service.ContactService;

/**
 * Author: Naveen Saini
 * Date: 02-Sep-2024	
 */
@Service
public class ContactServiceImpl implements ContactService {
	
	@Autowired
	private	ContactRepo	contactRepo;

	@Override
	public Boolean inserContactMessage(Contact contact) {
		Integer			response	=	0;
		
		response	=	contactRepo.insertContactMessage(contact.getName(), contact.getSurname(), contact.getEmail(), contact.getMessage());
		if(response==1)return true;
		return false;
	}

}
