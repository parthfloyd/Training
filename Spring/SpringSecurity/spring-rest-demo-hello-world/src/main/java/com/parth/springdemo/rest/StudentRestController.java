package com.parth.springdemo.rest;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.parth.springdemo.entity.Student;

@RestController
@RequestMapping("/api")
public class StudentRestController {

	private List<Student> theStudents;

	// define @PostConstruct to load student data only once
	@PostConstruct
	public void loadData() {
		
		theStudents = new ArrayList<>();
		
		theStudents.add(new Student("Poornima", "Patel"));
		theStudents.add(new Student("Rashmin", "Panchal"));
		theStudents.add(new Student("Rajan", "Patel"));
	}
	// define endpoint for "/students"

	@GetMapping("/students")
	public List<Student> getStudents() {

		return theStudents;
	}
	
	//define endtpoint for "/students/{studentId}"
	
	@GetMapping("/students/{studentId}")
	public Student getStudent(@PathVariable int studentId) {
		
		//check studentId against the list size
		
		if((studentId>= theStudents.size()) || (studentId<0)) {
			throw new StudentNotFoundException("Student id not found - " + studentId);
		}
		//just index into the list. keeping it simble
		return theStudents.get(studentId);
	}
	
	
}
