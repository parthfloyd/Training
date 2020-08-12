package com.parth.aopdemo.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.parth.aopdemo.Account;

@Component
public class AccountDAO {
	
	private String name;
	
	private String serviceCode;
	
	//add a new method find accounts
	
		public List<Account> findAccounts(){
			
			List<Account> myAccounts = new ArrayList<>();
			
			//create sample accounts
			Account temp1 = new Account("John","Silver");
			Account temp2 = new Account("Madhu","Platinum");
			Account temp3 = new Account("Luca","Gold");
			
			//add to our list
			myAccounts.add(temp1);
			myAccounts.add(temp2);
			myAccounts.add(temp3);
			
			return myAccounts;
			
		}
	
	//Getter and setters
	public String getName() {
		System.out.println(getClass() + ": in getName()");
		return name;
	}

	public void setName(String name) {
		System.out.println(getClass() + ": in setName()");
		this.name = name;
	}

	public String getServiceCode() {
		System.out.println(getClass() + ": in getServiceCode()");
		return serviceCode;
	}

	public void setServiceCode(String serviceCode) {
		System.out.println(getClass() + ": in setServiceCode()");
		this.serviceCode = serviceCode;
	}
	
	//methods
	public void addAccount(Account theAccount,Boolean vipFlag) {
		
		System.out.println(getClass() + " DOING MY DB WORK: ADDING AN ACCOUNT");
		
	}
	
	public boolean doWork() {
		
		System.out.println(getClass() + ": doWork()");
		return false;
	}
}

