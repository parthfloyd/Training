package com.parth.aopdemo;

import java.util.List;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.parth.aopdemo.dao.AccountDAO;

public class AfterFinallyDemoApp {

	public static void main(String[] args) {
		
		//read spring config java class
		AnnotationConfigApplicationContext context=
				new AnnotationConfigApplicationContext(DemoConfig.class);
		
		//get the bean from spring container
		AccountDAO theAccountDAO = context.getBean("accountDAO",AccountDAO.class);
		
		//call method to find accounts
		List<Account> theAccounts = null;
		try {
			//add boolean flag to simulate exception
			boolean tripWire = true;
			theAccounts = theAccountDAO.findAccounts(tripWire);
		}
		catch(Exception exc) {
			System.out.println("\nMain program ... caught exception .." + exc);
		}
		
		//display the accounts
		System.out.println("\n\nMain Program: After Throwing Demo App");
		System.out.println("------------------------------------------");
		
		System.out.println(theAccounts);
		System.out.println(); //blank line
		//close the context
		context.close();
	}

}
