package com.parth.aopdemo.aspect;

import java.util.List;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
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
	
	/*
	 * 
	 * Around advice
	 */
	@Around("execution(* com.parth.aopdemo.service.*.getFortune(..))")
	public Object aroundGetFortune(ProceedingJoinPoint theProceedingJoinPoint) throws Throwable{
		
		//print out method
		String method = theProceedingJoinPoint.getSignature().toShortString();
		System.out.println("\n======>>> Executing @Aroundon method: "+ method);
		
		//get begin timestamp
		long begin = System.currentTimeMillis();
		
		//execute method
		Object result = theProceedingJoinPoint.proceed();
		
		//get end timestamp
		long end = System.currentTimeMillis();
		
		//compute duration and display it
		long duration = end-begin;
		System.out.println("\n=======>>>> Duration: " + duration/1000.0 + " seconds");
		
		return result;
	}
	
	
	/*
	 * 
	 *Adding after advice 
	 * 
	 */
	@After("execution(* com.parth.aopdemo.dao.AccountDAO.findAccounts(..))")
	public void afterFinallyFindAccountsAdvice(JoinPoint theJoinPoint) {
		
		//print which method we are advising on
		String method = theJoinPoint.getSignature().toShortString();
		System.out.println("\n======>>> Executing @After on method: "+ method);
		
		
	}
	
	
	
	/*
	 * Adding advice for
	 * AfterThrowing
	 */
	
	@AfterThrowing(pointcut="execution(* com.parth.aopdemo.dao.AccountDAO.findAccounts(..))",throwing="theExc")
	public void afterThrowingFindAccountsAdvice(JoinPoint theJoinPoint, Throwable theExc) {
			
		//print which method we are advising on
		String method = theJoinPoint.getSignature().toShortString();
		System.out.println("\n======>>> Executing @AfterThrowing on method: "+ method);
		
		//log the exception
		System.out.println("\n======>>> The exception is : " + theExc);
	}
	
	
	/*
	 * Adding advice for
	 * @AfterReturning 
	 */
	@AfterReturning(pointcut="execution(* com.parth.aopdemo.dao.AccountDAO.findAccounts(..))", returning="result")
	public void afterReturningFindAccountsAdvice(JoinPoint theJoinPoint, List<Account> result) {
		
		//print which method we are advising on
		String method = theJoinPoint.getSignature().toShortString();
		System.out.println("\n======>>> Executing @AfterReturning on method: "+ method);
		//print out the results
		System.out.println("\n========>>> result is: "+ result);
		
		//let`s modify the data
		
		
		//convert account name to uppercase
		convertAccountNamesToUpperCase(result);
		
		System.out.println("\n========>>> Uppercased result is: "+ result);
		
	}
	
	
	
	
	private void convertAccountNamesToUpperCase(List<Account> result) {
		//loop through accounts
		for (Account tempAccount: result) {
			//get uppercase
			String theUpperName = tempAccount.getName().toUpperCase();
			
			//update name
			tempAccount.setName(theUpperName);
		}
	}




	/*
	 * 
	 * Advice for @Before
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
