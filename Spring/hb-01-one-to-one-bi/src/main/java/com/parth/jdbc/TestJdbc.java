package com.parth.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;

public class TestJdbc {
	public static void main(String[] args) {
	
		String jdbcUrl= "jdbc:mysql://localhost:3306/hb-01-one-to-one-uni?userSSL=false&serverTimezone=UTC"; //for previous sql version write till userSSL=false only
		String user = "hbstudent"; //advisable to use properties file for passwords
		String pass = "hbstudent";
		try {
			System.out.println("Connecting to database: "  + jdbcUrl);
			
			Connection myConn = 
					DriverManager.getConnection(jdbcUrl, user, pass);
			
			System.out.println("Connection Successfull!");
		}
		catch(Exception exc) {
			exc.printStackTrace();
		}
	}
}
