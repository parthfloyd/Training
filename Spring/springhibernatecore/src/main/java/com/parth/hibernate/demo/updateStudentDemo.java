package com.parth.hibernate.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.parth.hibernate.demo.entity.Student;

public class updateStudentDemo {

	public static void main(String[] args) {
		
		//create session factory
		SessionFactory factory=new Configuration()
									.configure("hibernate.cfg.xml")
									.addAnnotatedClass(Student.class)
									.buildSessionFactory();
		
		//create session
		Session session = factory.getCurrentSession();
		
		try {
			
			int studentId=1;
			
			//get a new session and start transaction
			session = factory.getCurrentSession();
			session.beginTransaction();
			
			//retrieve student based on id : primary key
			System.out.println("\nGetting student with id: " + studentId);
			
			Student myStudent = session.get(Student.class, studentId);
			
			System.out.println("Get Complete: " +myStudent);
			
			
			//update one student name
			
			System.out.println("Updating student..");
			myStudent.setFirstName("Scooby");
		
			//commiting transaction	
			session.getTransaction().commit();
		
			//updating bulk
			
			session = factory.getCurrentSession();
			session.beginTransaction();
			
			//update email for all students
			
			System.out.println("update email for all students");
			
			session.createQuery("update Student set email='foo@gmail.com'").executeUpdate();
			//commit the transaction
			
			session.getTransaction().commit();
			
			System.out.println("Done!");
		}
		finally {
			factory.close();
		}
	}

}
