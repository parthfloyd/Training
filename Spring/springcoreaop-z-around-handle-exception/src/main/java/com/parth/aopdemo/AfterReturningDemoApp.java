package com.parth.aopdemo;

import java.util.List;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.parth.aopdemo.dao.AccountDAO;

public class AfterReturningDemoApp {

	public static void main(String[] args) {
		
		//read spring config java class
		AnnotationConfigApplicationContext context=
				new AnnotationConfigApplicationContext(DemoConfig.class);
		
		//get the bean from spring container
		AccountDAO theAccountDAO = context.getBean("accountDAO",AccountDAO.class);
		
		//call method to find accounts
		List<Account> theAccounts = theAccountDAO.findAccounts(false);
		
		//display the accounts
		System.out.println("\n\nMain Program: After returning Demo App");
		System.out.println("------------------------------------------");
		
		System.out.println(theAccounts);
		System.out.println(); //blank line
		//close the context
		context.close();
	}

}
