package com.parth.hibernate.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.parth.hibernate.demo.entity.Course;
import com.parth.hibernate.demo.entity.Instructor;
import com.parth.hibernate.demo.entity.InstructorDetail;

public class EagerLazyDemo {

	public static void main(String[] args) {
		
		//create session factory
		SessionFactory factory=new Configuration()
									.configure("hibernate.cfg.xml")
									.addAnnotatedClass(Instructor.class)
									.addAnnotatedClass(InstructorDetail.class)
									.addAnnotatedClass(Course.class)
									.buildSessionFactory();
		
		//create session
		Session session = factory.getCurrentSession();
		
		try {
			//start a transaction
			session.beginTransaction();
			
			//get instructor from db
			int theId=1;
			Instructor tempInstructor = session.get(Instructor.class, theId);
			
			System.out.println("Instructor"+ tempInstructor);
			
			//get courses for the instructor
			System.out.println("Parth: Courses: " + tempInstructor.getCourses());
			
			//commit transaction
			session.getTransaction().commit();
			
			System.out.println("Done!");
		}
		finally {
			//add clean up code
			session.close();
			factory.close();
		}
	}

}
