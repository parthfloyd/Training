<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>

<head>
	<title>Parth Company Home Page</title>
</head>

<body>
	<h2>Parth Company Home Page</h2>
	<hr>
	<p>
	Welcome to the Parth Company Homepage
	</p>
	
	<!-- Add a logout button -->
	<form:form action="${pageContext.request.contextPath}/logout" method="POST">
		<input type="submit" value="Logout"/>
	</form:form>
</body>

</html>