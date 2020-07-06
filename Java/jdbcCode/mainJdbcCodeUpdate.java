import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class mainJdbcCodeUpdate {

	public static void main(String[] args) throws SQLException {
		//Initializing variables to insert data and for database manipulation
		PreparedStatement pst;
		
		int id, choice=-1;
		String val = "", query =  "";
				
		//Opening connection and checking if it was successful
		Connection conn = jdbcCode.connectionMethod();
		if(conn == null) {
			System.out.println("unsuccessful connection");
			System.exit(0);
		}
		
		//Fetching data
		Scanner input = new Scanner(System.in);
		System.out.println("Enter the ID whose data you want to update");
		id = Integer.parseInt(input.next()); //Used wrapper to avoid skipping of String input
		
		//Deciding whether to update subject or date 
		boolean check = true;		
		while(check) {
			System.out.println("Press 1 to update the subject and 2 to update the date");
			choice = Integer.parseInt(input.next());
			if(choice == 1 || choice == 2) {
				check = false;
			}
		}
		switch(choice)  {
		
		case 1:
			System.out.println("Please enter the Subject:");
			val = input.next();
			query = "update new_table set test_name = ? where test_id = ?";
			break;
			
		case 2:
			System.out.println("Please enter the date:");
			val = input.next();
			query = "update new_table set test_date = ? where test_id = ?";
			break;
			
		}
		
		//Executing query
		pst = conn.prepareStatement(query);
		pst.setString(1, val);
		pst.setInt(2, id);
		pst.executeUpdate();
				
		//closing connection
		conn.close();
				
	}

}
