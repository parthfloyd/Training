<%@ page import = "java.util.*" %> <!-- how to import a package -->
<html>
<head>
<title>Practice 1</title>
</head>
<body>
Request User Agent : <%= request.getHeader("User-Agent") %>
</br>
Request LanguageL <%= request.getLocale() %>
</br>
<p> Hello! I am currently writing this code to practice JSP</p>
<%-- How to include a file --%>
<jsp:include page = "footer.jsp"/>
<%
Calendar now = Calendar.getInstance();
if(now.HOUR_OF_DAY >=19 || now.HOUR_OF_DAY <= 5){
	%>
	<jsp:forward page = "dark.jsp"/>
<% } %>
</body>
</html>