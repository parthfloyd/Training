package javaCrud;
/*
 * Author : Parth Panchal
 * Description : I am writing this code to practice
 * 				connectivity of JAVA with MongoDB Database and also
 * 				practicing CRUD Operations
 * References: https://jar-download.com/artifacts/org.mongodb/mongo-java-driver/3.8.2/source-code
 			 : https://docs.mongodb.com/guides/
 */


import java.util.Scanner;

import org.bson.Document;
import com.mongodb.Block;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters; // to use  filters
import com.mongodb.client.model.Updates; // to use Updates

public class MainCRUDFile {
	//Scanner
	Scanner input = new Scanner(System.in);
	//--------------INSERT DATA------------------
	public void insertData(MongoCollection<Document> collection) {
		
		//Fetching input from user
		System.out.println("Enter the name:");
		String name = input.nextLine();
		System.out.println("Enter the Gender:");
		String gender = input.next();
		System.out.println("Enter the Department:");
		String department = input.next();
		System.out.println("Enter the JoiningYear:");
		int year = Integer.parseInt(input.next());
		
		//inserting data to the database
		Document employee = new Document("name",name)
	    		.append("gender", gender)
	    		.append("department", department)
	    		.append("joinYear",year);
	    
		collection.insertOne(employee);
		System.out.println("Successful!");
	}
    
    //=============READ DATA===================
	public void readData(MongoCollection<Document> collection) {
	    FindIterable<Document> findIterable = collection.find(); //Creating an iterator
	    Block<Document> printBlock = new Block<Document>() {
	        @Override
	        public void apply(final Document document) {
	            System.out.println(document.toJson()); //document.get("name")
	        }
	    };
	    findIterable.forEach(printBlock);
	}
    //===========UPDATE DATA==========================
	public void updateData(MongoCollection<Document> collection) {
		//Fetching input from user
		System.out.println("Enter the name of employee:");
		String name = input.next();
		System.out.println("Enter name of new Department:");
		String department = input.next();
		collection.updateOne(Filters.eq("name", name),
	            Updates.set("department", department));
	}
    //============= DELETING DATA======================= 
	public void deleteData(MongoCollection<Document> collection) {
		System.out.println("Enter the name of employee to DELETE:"); //Object id will be a wiser choice but since its just the focus is on the CRUD operations
		String name = input.nextLine();
		System.out.println("Employee Deleted! : " + name);
		collection.deleteOne(Filters.eq("name",name));
		
	}
	

}
