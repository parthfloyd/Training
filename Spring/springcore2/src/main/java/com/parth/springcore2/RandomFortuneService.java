package com.parth.springcore2;

import java.util.Random;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class RandomFortuneService implements FortuneService {
	
	//create an array of strings
	private String[] data = {
			"Beware of wolf in sheep`s clothing",
			"Diligence is mother of good luck",
			"The journey is the reward"
	};
	
	//create a random number generator
	private Random myRandom = new Random();
	
	@Override
	public String getFortune() {
		
		int index = myRandom.nextInt(data.length);
		String theFortune = data[index];
		return theFortune;
		
	}

}
