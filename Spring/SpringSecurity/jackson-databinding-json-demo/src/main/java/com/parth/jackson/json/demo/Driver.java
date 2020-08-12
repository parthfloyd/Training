package com.parth.jackson.json.demo;

import java.io.File;

import com.fasterxml.jackson.databind.ObjectMapper;

public class Driver {
	public static void main(String[] args) {
		
		try {
			//create object mapper
			ObjectMapper mapper = new ObjectMapper();
			//read json file
			//Student theStudent = mapper.readValue(new File("data/sample-lite.json"), Student.class);
			Student theStudent = mapper.readValue(new File("data/sample-full.json"), Student.class);
			//print first name and last name
			System.out.println("First Name = " + theStudent.getFirstName());
			System.out.println("First Name = " + theStudent.getLastName());
			System.out.println("Active Status = " + theStudent.isActive());
			
			//print out address
			Address tempAddress = theStudent.getAddress();
			
			System.out.println("Street: " + tempAddress.getStreet());
			System.out.println("City: " + tempAddress.getCity());
			
			//print out languages
			System.out.println("Favourite languages");
			for(String tempLang: theStudent.getLanguages()) {
				System.out.println(tempLang);
			}
		}
		catch(Exception exc) {
			exc.printStackTrace();
		}
	}
}
