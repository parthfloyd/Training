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
		
		//call the account business method
		Account myAccount = new Account();
		myAccount.setName("Parth");
		myAccount.setLevel("Platinum");
		theAccountDAO.addAccount(myAccount,true);
		theAccountDAO.doWork();
		
		//call getters and setters
		theAccountDAO.setName("foobar");
		theAccountDAO.setServiceCode("Silver");
		
		String name = theAccountDAO.getName();
		String code = theAccountDAO.getServiceCode();
		//call membership business method
		theMembershipDAO.addMember();
		theMembershipDAO.goToSleep();
		
		//close the context
		context.close();
	}

}
