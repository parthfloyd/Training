package com.parth.wct.aspect;

import java.util.logging.Logger;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class CRMLoggingAspect {
	
	//setup logger
	private Logger myLogger = Logger.getLogger(getClass().getName());
	
	//setup pointcut declarations
	@Pointcut("execution(* com.parth.wct.controller.*.*(..))")
	private void forControllerPackage() {}
	
	//do the same thing for service and dao package
	@Pointcut("execution(* com.parth.wct.service.*.*(..))")
	private void forServicePackage() {}

	@Pointcut("execution(* com.parth.wct.dao.*.*(..))")
	private void forDaoPackage() {}

	@Pointcut("forControllerPackage()|| forServicePackage() || forDaoPackage()")
	private void forAppFlow() {}
	//add @Before advice
	@Before("forAppFlow()")
	public void before(JoinPoint theJoinPoint) {
		
		//display method we are calling
		String theMethod = theJoinPoint.getSignature().toShortString();
		myLogger.info("===> @Before logging info Method: "  + theMethod);
		
		//display arguments
		Object[] args = theJoinPoint.getArgs();
		
		//loop through to display args
		for(Object tempArg: args) {
			myLogger.info("=======>>> argument: "+ tempArg);
		}
	}
		
	
	//Add @AfterReturning advice
	@AfterReturning(pointcut="forAppFlow()", returning="theResult")
	public void afterReturning(JoinPoint theJoinPoint, Object theResult) {
		
		//display method
		String theMethod = theJoinPoint.getSignature().toShortString();
		myLogger.info("===> @AfterReturning logging info Method: "  + theMethod);
		
		//display data retrned
		myLogger.info("===>> result: " + theResult);
	}
	
}
