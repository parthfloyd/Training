<html>
<head>
<title> Hello World!</title>
</head>
<body>
<h2> This is my First JSP Program!</h2>
<%= new java.util.Date() %>
<%-- This is my first sample comment, below i will write a scriptlet tag --%>
<%
int n;
String y = "Parth Panchal";
for(n=100; n<=200;n++)
	out.println(n + "\t");
%>
<%-- Below i will write Expression tag --%>
<%= y %>
</body>
</html>