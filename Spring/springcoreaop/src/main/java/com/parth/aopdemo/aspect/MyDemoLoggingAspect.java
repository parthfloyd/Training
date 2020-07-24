package com.parth.aopdemo.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class MyDemoLoggingAspect {

	//this is where we add all our related advices for logging
	
	
	//start with an @Before Advice
	/*
	 * execution(* com.parth.aopdemo.dao.*.*(..)) this will match any method of any class of dao package
	 *Remember to use fully qualified class name for object
	 *below first start for any class and any method
	 */
	@Before("execution(public void com.parth.aopdemo.dao.*.*(..))") //we can also use wildcard to use any return type  public * add*() , also remember access
	public void beforeAddAccountAdvice() {// modifiers are optional as well. wildcard can be used on args too (*) for any type or (..) for 0 or more args
		
		System.out.println("\n========>>>> Executing @Before advice on any method of any class of appdemo.dao package");
	}
}
