import java.sql.*;
import java.util.Scanner;

public class mainJdbcCodeInsert {

	public static void main(String[] args) throws SQLException {
		
		//Initializing variables to insert data and for database manipulation
		PreparedStatement pst;
		
		int id;
		String subject, date ,query;
		
		//Opening connection and checking if it was successful
		Connection conn = jdbcCode.connectionMethod();
		if(conn == null) {
			System.out.println("unsuccessful connection");
			System.exit(0);
		}
		
		//Fetching data
		Scanner input = new Scanner(System.in);
		System.out.println("Enter the ID, subject and date(yyyy-mm-dd) respectively");
		id = Integer.parseInt(input.next()); //Used wrapper to avoid skipping of String input
		subject = input.next();
		date = input.next();
		
		//creating query
		query = "insert into new_table values(?,?,?)";
		
		//executing query
		pst = conn.prepareStatement(query);
		pst.setInt(1, id);
		pst.setString(2, subject);
		pst.setString(3,date);		
		pst.executeUpdate();
		
		//closing connection
		conn.close();
		
		

	}

}
