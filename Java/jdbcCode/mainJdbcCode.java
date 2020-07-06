import java.sql.*;
public class mainJdbcCode {
	public static void main(String[] args) throws SQLException {
		ResultSet rst;
		PreparedStatement pst;
		String query;
		
		//Opening Connection
		Connection conn = jdbcCode.connectionMethod();
		
		//In case of an error while opening the connection
		if(conn == null) {
			System.out.println("Error opening the connection!");
			System.exit(0);
		}
		
		//The query to  be executed
		query = "select * from new_table";
		
		//Using prepare statement to execute the query
		pst = conn.prepareStatement(query);
		rst = pst.executeQuery();
		
		//Looping over the rows
		while(rst.next()) {
			System.out.println(rst.getInt(1) + "\t" + rst.getString(2)+ "\t" + rst.getDate(3));
		}
		
		//closing the connection
		conn.close();
	}
}
