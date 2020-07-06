import java.sql.*;

/* Added my-SQL-connector-java to the referenced libraries*/
public class jdbcCode{
    static Connection connectionMethod(){
    	
        Connection conn;
        
        //Registering the Driver
        try{
            Class.forName("com.mysql.cj.jdbc.Driver"); // This is the updated version of the depreciated "com.mysql.jdbc.Driver"
            conn = DriverManager.getConnection("jdbc:mysql://localhost/test","root","12345");
            return conn;
        }
        
        catch(Exception er){
            System.out.println(er.getMessage());
            return null;
        }
       
    }
    
}