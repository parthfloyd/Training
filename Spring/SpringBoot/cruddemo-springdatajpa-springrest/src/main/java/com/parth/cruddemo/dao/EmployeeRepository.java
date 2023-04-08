package com.parth.cruddemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.parth.cruddemo.entity.Employee;

@RepositoryRestResource(path="members") //if this is not specified default path would be classname_ +s ... here employees
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {

}
