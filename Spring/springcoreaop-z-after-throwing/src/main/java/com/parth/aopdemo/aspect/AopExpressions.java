package com.parth.aopdemo.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class AopExpressions {

	/*
	 * POINTCUTS
	 */
	
	@Pointcut("execution(public * com.parth.aopdemo.dao.*.*(..))")
	public void forDaoPackage() {}
	
	@Pointcut("execution(public * com.parth.aopdemo.dao.*.get*(..))")
	public void getter() {}
	
	@Pointcut("execution(public * com.parth.aopdemo.dao.*.set*(..))")
	public void setter() {}
	
	@Pointcut("forDaoPackage() && !(getter() || setter())")
	public void forDaoPackageNoGetterSetter() {}
	
}
