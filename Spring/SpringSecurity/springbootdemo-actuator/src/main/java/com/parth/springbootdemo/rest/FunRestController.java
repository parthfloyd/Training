package com.parth.springbootdemo.rest;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FunRestController {
	
	
	//inject properties
	@Value("${coach.name}")
	private String coachName;
	
	@Value("${team.name}")
	private String teamName;
	
	//expose new endpoint for team info
	@GetMapping("/teaminfo")
	public String getTeamInfo() {
		return "Coach Name: "+ coachName+ "Team name: " + teamName;
	}
	//expose "/" that return "Hello World"
	@GetMapping("/")
	public String sayHello() {
		return "Hello World! Time on server is " + LocalDateTime.now();
	}
	
	//expose a new endpoint for workout
	@GetMapping("/workout")
	public String getWorkout() {
		return "run a hard 5k!";
	}
	
	//expose a new endpoint for fortune
		@GetMapping("/fortune")
		public String getFortune() {
			return "Today is your lucky day!";
		}
}
