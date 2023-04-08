package com.parth.springdemo.thymeleafdemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.parth.springdemo.thymeleafdemo.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {

}
