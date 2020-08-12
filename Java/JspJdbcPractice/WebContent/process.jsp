<%@ page import = "java.sql.*"%>

<%
//Declaring variables
Connection conn ;
PreparedStatement pst;
ResultSet rs;

try{
	//Registering Driver
	Class.forName("com.mysql.cj.jdbc.Driver"); 
	conn = DriverManager.getConnection("jdbc:mysql://localhost/test","root","12345"); //Database name "test", Table to be used "new_table"
	
	//Query to insert data
	String query = "insert into new_table(test_id,test_name,test_date) values(?,?,?)";
	
	//Assigning values from the form of indexInsert.jsp page
	int number = Integer.parseInt(request.getParameter("number"));
	String subject = request.getParameter("subject");
	String date = request.getParameter("date");
	
	//initializing query, adding values and executing preparedStatement
	pst = conn.prepareStatement(query);
	pst.setInt(1,number);
	pst.setString(2,subject);
	pst.setString(3,date);
	pst.execute(); //execution
	
	//closing connection
	conn.close();
}
catch(Exception er){
	out.print(er);
}
%>