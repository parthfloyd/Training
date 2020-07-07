<html>
<body>
<center><h1> Hello ${param.name}!</h1></center>
<p>
<h2>Here are the details you have entered:</h2>
Name : ${param.name }<br>
Age: <%= request.getParameter("age") %><br>
Country : <%= request.getParameter("country") %> <br>
Favorite subject <%= request.getParameter("subject") %> <br>

<%-- Script for Marriage checkbox --%>
<%
boolean flag = request.getParameter("martialStatus")!= null;
if(flag==true)
	out.println("Martial Status : Married <br>");
else
	out.println("Martial Status : Single<br>");
%>

<%--Script for city checkbox --%>
Cities Visited : 
<ul>
<%
String arr[] = request.getParameterValues("city");
for(String str: arr){
	out.println("<li>" + str + "<//li>");
}
%>
</ul>
</p>
</body>
</html>