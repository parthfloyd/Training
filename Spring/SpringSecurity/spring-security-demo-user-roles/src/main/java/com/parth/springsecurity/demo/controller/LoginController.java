package com.parth.springsecurity.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {
	
	@GetMapping("/showMyLoginPage")
	public String showMyLoginPage() {
		return "fancy-login";
	}
	
	//add req mapping for access denied
	@GetMapping("/accessDenied")
	public String showAccessDenied() {
		
		return "accessDenied";
	}
	
}
