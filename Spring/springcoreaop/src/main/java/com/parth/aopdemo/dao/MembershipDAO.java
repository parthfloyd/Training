package com.parth.aopdemo.dao;

import org.springframework.stereotype.Component;

@Component
public class MembershipDAO {
	
	public void addMember() {
		
		System.out.println(getClass() + ": Doing stuff: Adding a membership account");
	}
	
}
