package com.parth.aopdemo;

import java.util.logging.Logger;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.parth.aopdemo.service.TrafficFortuneService;

public class AroundHandleExceptionDemoApp {

	private static Logger myLogger = 
			Logger.getLogger(AroundHandleExceptionDemoApp.class.getName());
	public static void main(String[] args) {
		
		//read spring config java class
		AnnotationConfigApplicationContext context=
				new AnnotationConfigApplicationContext(DemoConfig.class);
		
		//get the bean from spring container
		TrafficFortuneService theFortuneService = context.getBean("trafficFortuneService",TrafficFortuneService.class);
		
		myLogger.info("\nMain Program: AroundDemoApp");
		
		myLogger.info("Calling getFortune");
		
		boolean tripWire =true;
		String data = theFortuneService.getFortune(tripWire);
		
		myLogger.info("My Fortune is: " +data);
		//close the context
		context.close();
	}

}
