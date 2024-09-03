package com.example.sarkariresult.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sarkariresult.config.jwt.JwtUtils;
import com.example.sarkariresult.model.JwtResponse;
import com.example.sarkariresult.model.LoginRequest;
import com.example.sarkariresult.model.SignupRequest;
import com.example.sarkariresult.repositary.UserRepo;
import com.example.sarkariresult.service.UserService;
import com.example.sarkariresult.serviceimpl.MyUserDetailImpl;


/**
 * Author: Naveen Saini
 * Date: 23-Aug-2024	
 */
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	  AuthenticationManager authenticationManager;

	  @Autowired
	  UserRepo userRepository;

	  @Autowired
	  JwtUtils jwtUtils;
	  
	  @Autowired
	  UserService	userService;
	  

	  @PostMapping("/signin")
	  public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
		  System.out.println("========= login  ==============="+loginRequest);

	    Authentication authentication = authenticationManager.authenticate(
	        new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

	    SecurityContextHolder.getContext().setAuthentication(authentication);
	    String jwt = jwtUtils.generateJwtToken(authentication);
	    
	    MyUserDetailImpl userDetails = (MyUserDetailImpl) authentication.getPrincipal();    
	    List<String> roles = userDetails.getAuthorities().stream()
	        .map(item -> item.getAuthority())
	        .collect(Collectors.toList());

	    return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(),roles.get(0)));
	  }

	  @PostMapping("/signup")
	  public ResponseEntity<?> registerUser(@RequestBody SignupRequest signUpRequest) {
	  System.out.println("========= register  ===============");
	  userService.insertUser(signUpRequest);
	    return ResponseEntity.ok(new String("User registered successfully!"));
	  }
	  

}
