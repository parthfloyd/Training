package com.parth.hibernate.demo;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.parth.hibernate.demo.entity.Student;

public class QueryStudentDemo {

	public static void main(String[] args) {
		
		//create session factory
		SessionFactory factory=new Configuration()
									.configure("hibernate.cfg.xml")
									.addAnnotatedClass(Student.class)
									.buildSessionFactory();
		
		//create session
		Session session = factory.getCurrentSession();
		
		try {
			
			//start a transaction
			session.beginTransaction();
			
			//query students
			List<Student> theStudents = session.createQuery("from Student").getResultList();
			
			//display the students
			displayStudents(theStudents);
			
			//query students : lastName= 'Duck'
			theStudents = session.createQuery("from Student s where s.lastName='Duck'").getResultList();
			
			//display students
			System.out.println("\n\n\nFrom students with last name of Duck");
			displayStudents(theStudents);
			
			//query students: lastName='Duck' Or FirstName = 'Amar'
			theStudents=
					session.createQuery("from Student s where s.lastName = 'Duck' OR s.firstName = 'Amar'").getResultList();
			
			
			//display students
			System.out.println("\n\n students with either lastname = duck or firstname = amar");
			displayStudents(theStudents);
			
			//display students whose email ends with world.com
			theStudents = session.createQuery("from Student s where s.email like '%world.com'").getResultList();
			
			
			//display students
			System.out.println("\n\nstudents with email of world.com");
			displayStudents(theStudents);
			
			//commit transaction
			session.getTransaction().commit();
			
			System.out.println("Done!");
		}
		finally {
			factory.close();
		}
	}

	private static void displayStudents(List<Student> theStudents) {
		for(Student tempStudent : theStudents) {
			System.out.println(tempStudent);
		}
	}

}
