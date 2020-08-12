package com.parth.springdemo.thymeleafdemo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.parth.springdemo.thymeleafdemo.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {

	//to sort by last name
	public List<Employee> findAllByOrderByLastNameAsc();
}
