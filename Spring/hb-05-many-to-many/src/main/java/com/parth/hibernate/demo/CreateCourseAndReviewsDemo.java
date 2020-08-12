package com.parth.hibernate.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.parth.hibernate.demo.entity.Course;
import com.parth.hibernate.demo.entity.Instructor;
import com.parth.hibernate.demo.entity.InstructorDetail;
import com.parth.hibernate.demo.entity.Review;

public class CreateCourseAndReviewsDemo {

	public static void main(String[] args) {
		
		//create session factory
		SessionFactory factory=new Configuration()
									.configure("hibernate.cfg.xml")
									.addAnnotatedClass(Instructor.class)
									.addAnnotatedClass(InstructorDetail.class)
									.addAnnotatedClass(Course.class)
									.addAnnotatedClass(Review.class)
									.buildSessionFactory();
		
		//create session
		Session session = factory.getCurrentSession();
		
		try {
			//start a transaction
			session.beginTransaction();
			
			//create a course
			Course tempCourse = new Course("Pacman- How to score one million points");
			
			//add some reviews
			tempCourse.addReview(new Review("Great course.. loved it"));
			tempCourse.addReview(new Review("Cool course.. well done"));
			tempCourse.addReview(new Review("What a dumb course..still loved it"));

			
			//save the course. leverage and cascade all
			session.save(tempCourse);
			
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
