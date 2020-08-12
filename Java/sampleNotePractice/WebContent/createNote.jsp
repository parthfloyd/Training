<%@ page import= "javax.servlet.http.Cookie" %>
<html>
<head>
<title> Welcome to the Notes WebApp, Create a Note!</title>
</head>
<body>
<%
Cookie loginRef[] = request.getCookies();
String userName = "";
for(Cookie y : loginRef){
	if(y.getName().equals("ckuname")){
		userName = y.getValue();
	}
}
%>
<form action="createNoteServlet" method = "post">
	<input type = "hidden" name = "nuser" value= <%=userName %>>
	<label>Note title: </label><input type = "text" maxlength = "45" name = "ntitle"> <br>
	<label>Note content: </label><input type = "text" maxlength="240" name = "ncontent"><br>
	<input type = "submit" name = "submit"><br><br>
	<a href = "index.jsp">Click here to Sign in instead!</a>
</form>
</body>
</html>