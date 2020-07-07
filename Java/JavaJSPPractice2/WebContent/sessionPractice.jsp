<%@ page import= "java.util.*" %>
<html>
<body>
<% out.println("Session ID : " + session.getId() + "<br>"); %>
<% Date creationTime = new Date(session.getCreationTime()); %>
<% Date accessTime = new Date(session.getLastAccessedTime()); %>
<% out.println("Session creationTime : " + creationTime + "<br>"); %>
<% out.println("Session Last Accessed Time : " + creationTime + "<br>"); %>
<h1>Welcome to the simple Notes web app!</h1>
<form action = "sessionPractice.jsp">
<label>Enter your note: </label>
<input type = "text" name = "tb1"></input>
<input type = "submit"></input>
</form>

<% 
List <String> myNotes = (List <String>) session.getAttribute("sess1");
if(myNotes == null){
	myNotes = new ArrayList<String>();
	session.setAttribute("sess1",myNotes);
}

String val = request.getParameter("tb1");
if(val!= null && val!= ""){
	myNotes.add(val);
}

%>

<ol>
<%
for(String str : myNotes){
	out.println("<li>"+ str+ "<//li>");
}


%>


</ol>
</body>
</html>