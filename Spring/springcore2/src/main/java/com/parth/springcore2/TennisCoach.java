package com.parth.springcore2;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component                       //alternatively you can specify bean id Component("bean_Name")
public class TennisCoach implements Coach {
	//practicing properties with java annotation
	@Value("${foo.email}")
	private String email;
	
	@Value("${foo.team}")
	private String team;
		
	public String getEmail() {
		return email;
	}

	public String getTeam() {
		return team;
	}

	@Autowired 
	@Qualifier("randomFortuneService") // to resolve multiple implementation
	private FortuneService fortuneService;
	
	//default constructor
	public TennisCoach() {
		System.out.println(">> Inside Default Constructor of Tennis Coach");
	}
	
	//define init method
	@PostConstruct            //to use this you need to add javax annotation dependency for java version > 9
	public void doMyStartupStuff() {
		System.out.println(">>Tennis Coach: inside of doMyStartupStuff");
	}
	
	//define destroy method
	@PreDestroy
	public void doMyCleanupStuff() {
		System.out.println(">>Tennis Coach: inside of doMyCleanupStuff");
	}
	//define a setter method
//	@Autowired
//	public void doSomeCrazyStuff(FortuneService theFortuneService) {
//		System.out.println("Inside Crazy method of tennis coach");
//		fortuneService = theFortuneService;
//	}
//	@Autowired
//	public TennisCoach(FortuneService theFortuneService) {
//		fortuneService = theFortuneService;
//	}
	@Override
	public String getDailyWorkout() {
		return "Practice your backhand volley!";
	}

	@Override
	public String getDailyFortune() {
		return fortuneService.getFortune();
	}

}
