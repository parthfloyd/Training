package com.parth.springdemo.thymeleafdemo.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.parth.springdemo.thymeleafdemo.entity.Employee;
import com.parth.springdemo.thymeleafdemo.service.EmployeeService;

@Controller
@RequestMapping("/employees")
public class EmployeeController {
	
	private EmployeeService employeeService;
	
	public EmployeeController(EmployeeService theEmployeeService) {
		employeeService = theEmployeeService;
	}
	
	
	//add mapping for /list
	@GetMapping("/list")
	public String listEmployees(Model theModel) {
		
		//get employees from the database
		List<Employee> theEmployees = employeeService.findAll();
		//add to the spring model
		theModel.addAttribute("employees", theEmployees);
		
		return "list-employees";
	}
	
}
