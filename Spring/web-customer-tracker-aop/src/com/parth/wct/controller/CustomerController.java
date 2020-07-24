package com.parth.wct.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.parth.wct.entity.Customer;
import com.parth.wct.service.CustomerService;

@Controller
@RequestMapping("/customer")
public class CustomerController {
	
	
	//inject the customer service
	@Autowired
	private CustomerService customerService;
	
	
	@GetMapping("/list")
	public String listCustomers(Model theModel) {
		
		//get customers from service which delegates to dao
		List<Customer> theCustomers = customerService.getCustomers();
		
		//add customers to the model
		theModel.addAttribute("customers",theCustomers);
		
		return "list-customers";
	}
	
	@GetMapping("/showFormForAdd")
	public String showFormForAdd(Model theModel) {
		//create model to bind form data
		Customer theCustomer = new Customer();
		
		theModel.addAttribute("customer",theCustomer);
		return "customer-form";
	}
	
	@PostMapping("/saveCustomer")
	public String saveCustomer(@ModelAttribute("customer") Customer theCustomer) {
			
			//save customer using service
			customerService.saveCustomer(theCustomer);
			return "redirect:/customer/list";
	}
	
	@GetMapping("/showFormForUpdate")
	public String showFormForUpdate(@RequestParam("customerId") int theId, Model theModel) {
		// get customer from srevice
		Customer theCustomer  = customerService.getCustomer(theId);
		
		//set customer as a model attribute to pre populate the form
		theModel.addAttribute("customer",theCustomer);
		
		//send over to our form
		return "customer-form";
	}
	
	@GetMapping("/delete")
	public String deleteCustomer(@RequestParam("customerId") int theId) {
		
		customerService.deleteCustomer(theId);
		
		return "redirect:/customer/list";
	}
}
