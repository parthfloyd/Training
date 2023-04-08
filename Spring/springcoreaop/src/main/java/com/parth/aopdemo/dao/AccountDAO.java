package com.parth.aopdemo.dao;

import org.springframework.stereotype.Component;

import com.parth.aopdemo.Account;

@Component
public class AccountDAO {
	
	public void addAccount(Account theAccount,Boolean vipFlag) {
		
		System.out.println(getClass() + " DOING MY DB WORK: ADDING AN ACCOUNT");
		
	}
}

