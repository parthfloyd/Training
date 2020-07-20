package com.parth.springcore1;

public class HappyFortuneService implements FortuneService {

	@Override
	public String getFortune() {
		return "Today is your lucky Day!";
	}

}
