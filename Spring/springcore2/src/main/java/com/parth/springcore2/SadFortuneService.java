package com.parth.springcore2;

public class SadFortuneService implements FortuneService {

	@Override
	public String getFortune() {
		return "Today is a sad Day!";
	}

}
