package com.parth.hibernate.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

import com.parth.hibernate.demo.entity.Course;
import com.parth.hibernate.demo.entity.Instructor;
import com.parth.hibernate.demo.entity.InstructorDetail;

public class FetchJoinDemo {

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
			
			Query<Instructor> query =
						session.createQuery("select i from Instructor i "
											+ "JOIN FETCH i.courses "
											+ "where i.id=:theInstructorId",
											Instructor.class);
			
			//set parameter on Query
			query.setParameter("theInstructorId", theId);
			
			//execute query
			Instructor tempInstructor = query.getSingleResult();
			System.out.println("Instructor"+ tempInstructor);
			
			
			//commit transaction
			session.getTransaction().commit();
			
			session.close();
			
			System.out.println("\nParth : Courses: " + tempInstructor.getCourses());
			
			System.out.println("Done!");
		}
		finally {
			//add clean up code
			session.close();
			factory.close();
		}
	}

}
