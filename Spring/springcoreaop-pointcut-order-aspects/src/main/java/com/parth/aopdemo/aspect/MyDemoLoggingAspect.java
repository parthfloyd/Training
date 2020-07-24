package com.parth.aopdemo.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Order(2)
public class MyDemoLoggingAspect {
	
	/*
	 * ADVICES
	 */
	@Before("com.parth.aopdemo.aspect.AopExpressions.forDaoPackageNoGetterSetter()") //we can also use wildcard to use any return type  public * add*() , also remember access
	public void beforeAddAccountAdvice() {// modifiers are optional as well. wildcard can be used on args too (*) for any type or (..) for 0 or more args
		
		System.out.println("\n========>>>> Executing @Before advice on any method of any class of appdemo.dao package");
	}
	
}
