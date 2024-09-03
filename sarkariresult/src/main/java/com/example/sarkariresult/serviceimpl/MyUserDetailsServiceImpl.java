package com.example.sarkariresult.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.sarkariresult.enums.ResponseType;
import com.example.sarkariresult.model.User;
import com.example.sarkariresult.repositary.UserRepo;

/**
 * Author: Naveen Saini
 * Date: 23-Aug-2024	
 */
@Service
public class MyUserDetailsServiceImpl  implements UserDetailsService {
	  @Autowired
	  UserRepo userRepository;

		
		@Override
		public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
			User user = new User();
		    user.setEmail(email);
			User st = userRepository.getTheUserByEmail(user).get(ResponseType.RESPONSE.toString()).getData().get(0);
			
			if(st!=null)
			{
				return new MyUserDetailImpl(st);
			}
			
			throw new BadCredentialsException(email+" not exists. ");
			
		}
	  
	  

	}
