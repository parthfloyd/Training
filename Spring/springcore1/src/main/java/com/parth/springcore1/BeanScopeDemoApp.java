package com.parth.springcore1;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class BeanScopeDemoApp {

	public static void main(String[] args) {
		// load the spring config file
		ClassPathXmlApplicationContext context= 
				new ClassPathXmlApplicationContext("beanScope-applicationContext.xml");
		
		//retrieve bean from spring container
		Coach theCoach = context.getBean("myCoach",Coach.class);
		
		Coach alphaCoach = context.getBean("myCoach",Coach.class);
		
		//Check if they are the same
		boolean result = (theCoach == alphaCoach);
		
		//print out the results
		System.out.println("\n Pointing to the same Object: "+ result);
		
		System.out.println("Memory location of the coach:"+ theCoach);

		System.out.println("Memory location of the coach:"+ alphaCoach);
	}

}
