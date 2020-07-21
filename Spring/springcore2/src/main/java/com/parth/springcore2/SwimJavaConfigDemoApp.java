package com.parth.springcore2;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SwimJavaConfigDemoApp {

	public static void main(String[] args) {

		// read spring config file
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(SportConfig.class);
		
		// get bean from spring container
		SwimCoach theCoach = context.getBean("swimCoach", SwimCoach.class);
		
		// call a method on the bean
		System.out.println(theCoach.getDailyWorkout());
		
		//call a method to get daily fortune
		System.out.println(theCoach.getDailyFortune());
		
		//call our swim coach getter methods.. using props file
		System.out.println("email: " + theCoach.getEmail());
		System.out.println("team: "+ theCoach.getTeam());
		System.out.println("text: " + theCoach.getText());
		
		// close the context
		context.close();

	}

}
