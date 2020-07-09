<%@taglib prefix = "c" uri ="http://java.sun.com/jsp/jstl/core" %>
<%@ page import= "javax.servlet.http.Cookie" %>
<%@ page import ="java.sql.*" %>
<%@ page import = "java.io.PrintWriter" %>

<html>
<head>
<title> Welcome to the Notes WebApp!</title>
</head>
<body>

<%-- If the user hasn`t logged in already, this code section will be executed --%>
<%
Cookie loginRef[] = request.getCookies();
String userName = "";
for(Cookie y : loginRef){
	if(y.getName().equals("ckuname")){
		userName = y.getValue();
	}
}

if(userName.equals("")){
%>
	<h1> Hello! Please Login to use the notes</h1> <br>
	
	<form action="loginServlet" method = "post">
		<label>Username: </label><input type = "text" name = "uname"> <br>
		<label>Password: </label><input type = "password" name = "pass"><br>
		<input type = "submit" name = "submit"><br><br>
		<a href = "register.jsp">Click here to Register!</a>
</form>
<%}
else{
%>
	<%-- END OF CODE SECTION --%>
	
	<%-- IF USER HAS LOGGED IN EXECUTE CODE FOR THIS LINE ONWARDS --%>
	
	<h1>WELCOME BACK <%=userName %>!</h1>
	<a href = "logoutServlet">Click here to LogOut</a> <br>
	<a href = "createNote.jsp"> Click here to create a new note</a>
	<%--Delete Note option --%>>
	<form method = "post" action="deleteNoteServlet">
	<label>Enter the Note Number to delete: </label>
	<input type = "number" required name = "noteNumber">
	<input type = "submit" value = "delete!">
	</form>	
	<%-- creating connection to the database to fetch notes --%>
	<%
	Connection conn;
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		conn = DriverManager.getConnection("jdbc:mysql://localhost/noteDatabase","root","12345");
		
		String query = "select * from notes where notesUser = ?"; //Query
		
		//Fetching all notes of the user
		PreparedStatement pst = conn.prepareStatement(query); //Creating preparedStatement
		pst.setString(1, userName);
		ResultSet rs = pst.executeQuery(); // Executing Query
		
		//Displaying output
		if(rs.next()){ //checking if it has values
			out.print("<h1>Here are the Notes Created by you! </h1>");
			do{
			%>
	
			<table border = 1>
			<tr><th>Note id</th><td><%=rs.getInt(1) %></td>
			<tr><th>Note Title</th><td><%=rs.getString(3) %></td>
			<tr><th>Note Content</th><td><%=rs.getString(4) %></td>
			<tr><th>Note Author</th><td><%=rs.getString(2) %></td>
			<tr><th>Note Date and Time</th><td><%=rs.getString(5) %></td>
			</table> <br> <br>
			<%
			} while(rs.next()); //used do while since i want to execute it once before checking condition
		}//end of if //as it moves our result set object to the next row
		
	}
	catch(Exception e){
		out.print(e.getMessage());
	}
	%>
<%

}
%>
</body>
</html>