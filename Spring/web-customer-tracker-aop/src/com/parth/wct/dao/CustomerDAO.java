package com.parth.wct.dao;

import java.util.List;

import com.parth.wct.entity.Customer;

public interface CustomerDAO {
	
	public List<Customer> getCustomers();

	public void saveCustomer(Customer theCustomer);

	public Customer getCustomer(int theId);

	public void deleteCustomer(int theId);
}
