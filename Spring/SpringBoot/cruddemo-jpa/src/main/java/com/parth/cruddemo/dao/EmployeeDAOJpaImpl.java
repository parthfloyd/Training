package com.parth.cruddemo.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.parth.cruddemo.entity.Employee;

@Repository
public class EmployeeDAOJpaImpl implements EmployeeDAO {

	private EntityManager entityManager;
	
	@Autowired
	public EmployeeDAOJpaImpl (EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}

	@Override
	public List<Employee> findAll() {
		//create a query
		Query theQuery = entityManager.createQuery("from Employee");
		//execute the query
		List<Employee> employees = theQuery.getResultList();
		//return the results
		return employees;
	}

	@Override
	public Employee findById(int theId) {
		
		// get employee
		Employee theEmployee = entityManager.find(Employee.class, theId);
		//return employee
		return theEmployee;
	}

	@Override
	public void save(Employee theEmployee) {
		//save or update
		Employee dbEmployee = entityManager.merge(theEmployee);
		
		//update with id from db
		theEmployee.setId(dbEmployee.getId());

	}

	@Override
	public void deleteById(int theId) {
		//delete with primary key
		Query theQuery = entityManager.createNamedQuery("delete from Employee where id=:emplyoeeId");
		
		theQuery.setParameter("employeeId",theId);
		
		theQuery.executeUpdate();
	}

}
