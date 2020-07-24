package com.parth.aopdemo.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class MyDemoLoggingAspect {

	/*
	 * POINTCUTS
	 */
	
	@Pointcut("execution(public * com.parth.aopdemo.dao.*.*(..))")
	private void forDaoPackage() {}
	
	@Pointcut("execution(public * com.parth.aopdemo.dao.*.get*(..))")
	private void getter() {}
	
	@Pointcut("execution(public * com.parth.aopdemo.dao.*.set*(..))")
	private void setter() {}
	
	@Pointcut("forDaoPackage() && !(getter() || setter())")
	private void forDaoPackageNoGetterSetter() {}
	
	/*
	 * ADVICES
	 */
	@Before("forDaoPackageNoGetterSetter()") //we can also use wildcard to use any return type  public * add*() , also remember access
	public void beforeAddAccountAdvice() {// modifiers are optional as well. wildcard can be used on args too (*) for any type or (..) for 0 or more args
		
		System.out.println("\n========>>>> Executing @Before advice on any method of any class of appdemo.dao package");
	}
	
	
	@Before("forDaoPackage()") 
	public void performApiAnalytics() {
		System.out.println("\n=========>>> Performing Analytics API ..");
	}
}
