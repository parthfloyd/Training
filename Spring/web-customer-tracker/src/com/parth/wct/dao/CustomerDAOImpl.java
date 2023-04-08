package com.parth.wct.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.parth.wct.entity.Customer;

@Repository
public class CustomerDAOImpl implements CustomerDAO {
	
	
	//need to inject session factory
	
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<Customer> getCustomers() {
		
		//get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		
		//create a query..sort by last name
		Query<Customer> theQuery = currentSession.createQuery("from Customer order by lastName", Customer.class);
		
		//execute query and get result list
		List<Customer> customers = theQuery.getResultList();
		
		//return the results
		return customers;
	}

	@Override
	public void saveCustomer(Customer theCustomer) {
		
		//get current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		//save the customer
		currentSession.saveOrUpdate(theCustomer); //this either updates or saves depending upon the primary key
	}

	@Override
	public Customer getCustomer(int theId) {
		
		//get current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		//retrive from database using primary key
		Customer theCustomer = currentSession.get(Customer.class, theId);
		return theCustomer;
	}

	@Override
	public void deleteCustomer(int theId) {
		
		//get current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		//delete object with primary key
		Query theQuery = currentSession.createQuery("delete from Customer where id=:customerId");
		theQuery.setParameter("customerId", theId);
		theQuery.executeUpdate();
	}
	



}
