package com.parth.springcore1;

import org.springframework.context.support.ClassPathXmlApplicationContext;

//SETTER DEMO
public class MyApp {
	public static void main(String[] args) {
		
		//load spring configuration file
		ClassPathXmlApplicationContext context = 
				new ClassPathXmlApplicationContext("applicationContext.xml");
		
		//retrieve bean from spring container
		CricketCoach theCoach = context.getBean("myCricketCoach",CricketCoach.class);
		
		//call methods on the bean
		System.out.println(theCoach.getDailyWorkout());
		System.out.println(theCoach.getDailyFortune());
		
		//call method to the literals
		
		System.out.println(theCoach.getEmailAddress());
		
		System.out.println(theCoach.getTeam());
		//close the context
		context.close();
	}

}
