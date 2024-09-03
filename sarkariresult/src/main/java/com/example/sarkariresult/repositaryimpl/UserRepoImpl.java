package com.example.sarkariresult.repositaryimpl;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.stereotype.Repository;

import com.example.sarkariresult.enums.ResponseType;
import com.example.sarkariresult.model.ResponseMessage;
import com.example.sarkariresult.model.User;
import com.example.sarkariresult.repositary.UserRepo;
import com.example.sarkariresult.utility.MessageMapper;

/**
 * Author: Naveen Saini
 * Date: 23-Aug-2024	
 */
@Repository
public class UserRepoImpl implements UserRepo{
	
	@Autowired
	private JdbcTemplate  jdbcTemplate;
	
	@Autowired
	private MessageMapper messageMapper;

	@Override
	public Map<String, ResponseMessage<Integer>> insertTheUser(User user) {
		ResponseMessage<Integer>	response	=	null;
		try {
			String sql="insert into master.users(name , bio ,age ,password,email,role ) values(?,?,?,?,?,?)";
			Integer rowaffected= jdbcTemplate.update(sql,user.getName(),user.getBio(),user.getAge(),user.getPassword(),user.getEmail(),user.getRole());
			response	=	new ResponseMessage<>(ResponseType.SUCCESS,null,rowaffected);
			return messageMapper.mapperForResponseMessage(response);
		}
		catch(Exception e){
			response	=	new ResponseMessage<>(ResponseType.SUCCESS,e.getMessage(),null);
			return messageMapper.mapperForResponseMessage(response);			
		}
	}

	@Override
	public Map<String, ResponseMessage<Integer>> updateTheUser(User user) {
		return null;
	}

	@Override
	public Map<String, ResponseMessage<Integer>> deleteTheUser(User user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<String, ResponseMessage<Integer>> insertUserInBatch(List<User> user) {
		return null;
	}

	@Override
	public Map<String, ResponseMessage<List<User>>> getAlltheUser() {
		return null;
	}

	@Override
	public Map<String, ResponseMessage<List<User>>> getTheUserByEmail(User user) {
		ResponseMessage<List<User>>	response	=	null;
		
		try {
			String sql="select u_id,name,bio,age,password,email,role from jdbc.user where email=?";
		 List<User>  users=	jdbcTemplate.query(sql,new PreparedStatementSetter() {

				@Override
				public void setValues(PreparedStatement ps) throws SQLException {
					ps.setString(1,user.getEmail());
					
				}
				
			},
				 new BeanPropertyRowMapper<>(User.class));
		 response=new ResponseMessage<>(ResponseType.SUCCESS,null,users);
		 
		 return messageMapper.mapperForResponseMessage(response);
		  
			
		} catch (Exception e) {
			 response=new ResponseMessage<>(ResponseType.FAIL,e.getMessage(),null);
			 return messageMapper.mapperForResponseMessage(response);
			  	
		}
	
	}


	
}
