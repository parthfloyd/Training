<%@taglib prefix = "c" uri ="http://java.sun.com/jsp/jstl/core" %>
<%@ page import= "javax.servlet.http.Cookie" %>

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
	<a href = "logoutServlet">click here to logout</a>
<%

}
%>
</body>
</html>