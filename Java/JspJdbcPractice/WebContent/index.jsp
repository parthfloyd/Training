<%@ page import = "java.sql.*"%>

<%
//Declaring Variables
Connection conn ;
PreparedStatement pst;
ResultSet rs;

try{
//Registering Drivers
Class.forName("com.mysql.cj.jdbc.Driver"); 
conn = DriverManager.getConnection("jdbc:mysql://localhost/test","root","12345");

//Using prepare statement to fetch data
pst = conn.prepareStatement("select * from new_table");
rs = pst.executeQuery(); //Executing Query

//To properly format data in a table
out.print("<table border = 1><tr><th>Number</th><th> Subject</th> <th> Date</th></tr>");
while(rs.next()){ // Looping over the resultset containing fetched data
	out.print("<tr>");
	out.print("<b> <td>"+ rs.getInt(1) + "</td><td>"+ rs.getString(2) + "</td><td>" + rs.getString(3) + "</td> <br>");
	out.print("<//tr>");
}
out.print("</table>");

conn.close();//closing connection

}
catch(Exception er){
	out.print(er);
}
%>
