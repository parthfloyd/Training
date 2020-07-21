package com.parth.springcore2;

import org.springframework.beans.factory.annotation.Value;

public class SwimCoach implements Coach {
	
	private FortuneService fortuneService;
	
	//practicing properties with java config file
	@Value("${foo.email}")
	private String email;
	
	@Value("${foo.team}")
	private String team;
	
	private String text = "I Love India";
	
	public String getText() {
		return text;
	}
		
	public String getEmail() {
		return email;
	}

	public String getTeam() {
		return team;
	}
	
	
	public SwimCoach(FortuneService theFortuneService) {
		fortuneService = theFortuneService;
	}
	@Override
	public String getDailyWorkout() {
		return "Swim 1000 metres as a warmup";
	}

	@Override
	public String getDailyFortune() {
		return fortuneService.getFortune();
	}

}
