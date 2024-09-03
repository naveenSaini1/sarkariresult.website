package com.example.sarkariresult.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.sarkariresult.model.SignupRequest;
import com.example.sarkariresult.model.User;
import com.example.sarkariresult.repositary.UserRepo;
import com.example.sarkariresult.service.UserService;

/**
 * Author: Naveen Saini
 * Date: 23-Aug-2024	
 */
@Service
public class UserServiceImpl implements UserService {
	
	  @Autowired
	  PasswordEncoder encoder;
	
	  @Autowired
	  private UserRepo repo;

	@Override
	public void insertUser(SignupRequest signUpRequest) {
		 User user=new User();
		    user.setName(signUpRequest.getUsername());
		    user.setEmail(signUpRequest.getEmail());
		    user.setPassword( encoder.encode(signUpRequest.getPassword()));
		    user.setBio("hello this is me because id ont care");
			user.setAge(18);
			user.setRole("ROLE_USER");
			repo.insertTheUser(user);
		
	}

}
