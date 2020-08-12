package com.parth.springcore1;

public class TrackCoach implements Coach {
	
	private FortuneService fortuneService;
	
	public TrackCoach() {} //Default Constructor
	
	public TrackCoach(FortuneService fortuneService) {
		super();
		this.fortuneService = fortuneService;
	}

	@Override
	public String getDailyWorkout() {
		return "Run a hard 5k";
	}

	@Override
	public String getDailyFortune() {
		return "Just Do It!" + fortuneService.getFortune();
	}
	
	// Add an init method
	public void doMyStartupStuff() {
		System.out.println("INSIDE STARTUP STUFF");
	}
	// Add a destory method
	public void doMyCleanupStuffYoYo() {
		System.out.println("INSIDE DESTROY METHOD!");
	}
}
