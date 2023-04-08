package com.parth.hibernate.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.parth.hibernate.demo.entity.Instructor;
import com.parth.hibernate.demo.entity.InstructorDetail;

public class GetInstructorDetailDemo {

	public static void main(String[] args) {
		
		//create session factory
		SessionFactory factory=new Configuration()
									.configure("hibernate.cfg.xml")
									.addAnnotatedClass(Instructor.class)
									.addAnnotatedClass(InstructorDetail.class)
									.buildSessionFactory();
		
		//create session
		Session session = factory.getCurrentSession();
		
		try {
			//start a transaction
			session.beginTransaction();
			
			//get instructor detail object
			int theId = 2;
			InstructorDetail tempInstructorDetail = 
					session.get(InstructorDetail.class, theId);
			
			//print associated instructor
			System.out.println("the associated instructor "+ tempInstructorDetail.getInstructor());
			
			
			//commit transaction	
			session.getTransaction().commit();
			
			System.out.println("Done!");
		}
		catch(Exception exc) {
			exc.printStackTrace();
		}
		finally {
			session.close(); //handle connection leak issue in case of exceptions
			factory.close();
		}
	}

}
