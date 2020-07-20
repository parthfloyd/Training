package com.parth.springcore1;

public class BaseballCoach implements Coach{
	
	//define a private field for dependency
	private FortuneService fortuneService;
	
	//Define a constructor for dependencyService;
	public BaseballCoach(FortuneService theFortuneService) {
		fortuneService = theFortuneService;
	}
	
	@Override
	public String getDailyWorkout() {
		return "Spend 30 minutes on batting practice";
	}

	@Override
	public String getDailyFortune() {
		
		//use my fortuneService to get a fortune
		return fortuneService.getFortune();
	}
}
