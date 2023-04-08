package com.parth.mycoolwebapp.mvc;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/hello") //creating the parent mapping
public class HelloWorldController {

	//need a controller method to show initial form
	@RequestMapping("/showForm")
	public String showForm() {
		return "helloworld-form";
	}
	
	//need a controller method to process the html form
	@RequestMapping("/processForm")
	public String processForm() {
		return "helloworld";
	}
	
	//new controller method to read form data and
	//add data to the model
	@RequestMapping("/processFormTwo")
	public String letsShoudDude(HttpServletRequest request, Model model) {
		
		//read request from html form
		String theName = request.getParameter("studentName");
		
		//convert data to all caps
		theName = theName.toUpperCase();
		
		//create message
		String result = "Yo! "+ theName;
		
		//add message
		model.addAttribute("message",result);
		
		return "helloworld";
	}
	
	
	//Using annotation
	@RequestMapping("/processFormThree")
	public String letsShoudDudeThree(@RequestParam("studentName") String theName, Model model) {
		
		//convert data to all caps
		theName = theName.toUpperCase();
		
		//create message
		String result = "Hello there! "+ theName;
		
		//add message
		model.addAttribute("message",result);
		
		return "helloworld";
	}
}
