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

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class MainFile {
	public static void main(String[] args) {
		try {
			//Establishing Connection
			final String uriString = "mongodb://localhost:27017"; //Port number is 27017 at localhost
		    MongoClient mongoClient = MongoClients.create(uriString); //Remember mogod.exe must be running in the background!
		    
		    //Switching to Database
		    MongoDatabase db = mongoClient.getDatabase("JavaPractice"); //Connecting to Database JavaPractice
		    MongoCollection<Document> collection = db.getCollection("employee"); //Connecting to collection employee
		    
		    //INTERFACE
		    Scanner input = new Scanner(System.in);
		    MainCRUDFile obj = new MainCRUDFile();
		    while(true) {
		    	System.out.println("=======================================");
		    	System.out.println("EMPLOYEE DATABASE HANDLER!\n1) Read Data\n2) Insert Data\n3) Update Data\n4) Delete Data\n5) Exit");
		    	System.out.print("=======================================\nPlease Enter your Selection:");
		    	int n = Integer.parseInt(input.next()); // Integer parse int to avoid string skipping
		    	try {
			    	switch(n) {
			    	
			    	case 1:
			    		obj.readData(collection);
			    		break;
			    	
			    	case 2:
			    		obj.insertData(collection);
			    		break;
			    	
			    	case 3:
			    		obj.updateData(collection);
			    		break;
			    	case 4:
			    		obj.deleteData(collection);
			    		break;
			    	case 5:
			    		//closing connection
			    		mongoClient.close();
			    		System.exit(0);
			    	}
		    	}
			    catch(Exception e) {
			    	System.out.println(e.getMessage());
			    	}
		    	}
		}    
		catch(Exception e) {
			e.printStackTrace();
		}
	}
}
	