package javaCrud;

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
		    	System.out.println("EMPLOYEE DATABASE HANDLER!");
		    	System.out.println("1) Read Data");
		    	System.out.println("2) Insert Data");
		    	System.out.println("3) Update Data");
		    	System.out.println("4) Delete Data");
		    	System.out.println("5) Exit");
		    	int n = input.nextInt();
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
	