package com.parth.aopdemo.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.parth.aopdemo.Account;

@Aspect
@Component
@Order(2)
public class MyDemoLoggingAspect {
	
	/*
	 * ADVICES
	 */
	@Before("com.parth.aopdemo.aspect.AopExpressions.forDaoPackageNoGetterSetter()") //we can also use wildcard to use any return type  public * add*() , also remember access
	public void beforeAddAccountAdvice(JoinPoint theJoinPoint) {// modifiers are optional as well. wildcard can be used on args too (*) for any type or (..) for 0 or more args
		
		System.out.println("\n========>>>> Executing @Before advice on any method of any class of appdemo.dao package");
		
		//display method signature
		MethodSignature methodSig = (MethodSignature) theJoinPoint.getSignature();
		
		System.out.println("Method: "+ methodSig);
		
		//display method arguments
		
		//get args
		Object[] args = theJoinPoint.getArgs();
		//loop through args
		for(Object tempArg : args) {
			System.out.println(tempArg);
			
			if(tempArg instanceof Account ) {
				//downcast it
				Account theAccount=(Account) tempArg;
				
				System.out.println("Account name: "+ theAccount.getName());
				System.out.println("Account name: "+ theAccount.getLevel());
			}
		}
	
	}
	
}
