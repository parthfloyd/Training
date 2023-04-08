package com.parth.hibernate.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.parth.hibernate.demo.entity.Course;
import com.parth.hibernate.demo.entity.Instructor;
import com.parth.hibernate.demo.entity.InstructorDetail;
import com.parth.hibernate.demo.entity.Review;
import com.parth.hibernate.demo.entity.Student;

public class CreateCoursesForMaryDemo {

	public static void main(String[] args) {
		
		//create session factory
		SessionFactory factory=new Configuration()
									.configure("hibernate.cfg.xml")
									.addAnnotatedClass(Instructor.class)
									.addAnnotatedClass(InstructorDetail.class)
									.addAnnotatedClass(Course.class)
									.addAnnotatedClass(Review.class)
									.addAnnotatedClass(Student.class)
									.buildSessionFactory();
		
		//create session
		Session session = factory.getCurrentSession();
		
		try {
			//start a transaction
			session.beginTransaction();
			
			//get student mary from database
			int studentId = 2;
			Student tempStudent = session.get(Student.class, studentId);
			
			System.out.println("\nLoaded student: "  + tempStudent);
			System.out.println("Courses: "  + tempStudent.getCourses());
			
			//create more courses
			Course tempCourse1 = new Course("Rubik`s cube- How to speed cube");
			Course tempCourse2 = new Course("Atari 2600 - Game development");
			
			//add student to courses
			tempCourse1.addStudent(tempStudent);
			tempCourse2.addStudent(tempStudent);
			
			//save the courses
			System.out.println("Saving the courses");
			session.save(tempCourse2);
			session.save(tempCourse1);
			
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
