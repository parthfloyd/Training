package com.parth.springcore1;

public class MyApp {
	public static void main(String[] args) {
		
		//Create the object
		Coach theCoach = new TrackCoach();
		
		//Use the object
		System.out.println(theCoach.getDailyWorkout());
	}

}
