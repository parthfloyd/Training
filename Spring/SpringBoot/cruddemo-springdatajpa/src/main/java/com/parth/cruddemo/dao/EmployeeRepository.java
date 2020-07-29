package com.parth.cruddemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.parth.cruddemo.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {

}
