package com.example.sarkariresult.controller.contact;
/**
 * Author: Naveen Saini
 * Date: 02-Sep-2024	
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sarkariresult.model.Contact;
import com.example.sarkariresult.service.ContactService;

@RestController
@RequestMapping("/api/public")
public class ContactController {
	
	@Autowired
	private	ContactService	contactService;
	
	@PostMapping("/makeNewContact")
	public ResponseEntity<Boolean> makeANewContact(@RequestBody Contact contact){
		
		return new ResponseEntity<Boolean>(contactService.inserContactMessage(contact),HttpStatus.OK);
	}

}
