package com.parth.aopdemo;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.parth.aopdemo.dao.AccountDAO;
import com.parth.aopdemo.dao.MembershipDAO;

public class MainDemoApp {

	public static void main(String[] args) {
		
		//read spring config java class
		AnnotationConfigApplicationContext context=
				new AnnotationConfigApplicationContext(DemoConfig.class);
		
		//get the bean from spring container
		AccountDAO theAccountDAO = context.getBean("accountDAO",AccountDAO.class);
		
		MembershipDAO theMembershipDAO = context.getBean("membershipDAO", MembershipDAO.class);
		
		//call the business method
		Account myAccount = new Account();
		theAccountDAO.addAccount(myAccount,true);
		theMembershipDAO.addMember();
		
		//close the context
		context.close();
	}

}
