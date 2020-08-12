<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
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
	
	<!-- Display username and role -->
	<p>
		User: <security:authentication property="principal.username"/>
		<br><br>
		Role(s): <security:authentication property="principal.authorities"/>
	</p>
	
	<!-- Add a link to point to /leaders ... this is for managers -->
	<security:authorize access = "hasRole('MANAGER')">
	<p>
		<a href="${pageContext.request.contextPath}/leaders">Leadership Meeting</a>
		(Only for Managers)
	</p>
	</security:authorize>
	<!-- Add a link to point to /systems ... this is for Admins -->
	<security:authorize access = "hasRole('ADMIN')">
	<p>
		<a href="${pageContext.request.contextPath}/systems">IT systems Meeting</a>
		(Only for Admins)
	</p>
	</security:authorize>
	<!-- Add a logout button -->
	<form:form action="${pageContext.request.contextPath}/logout" method="POST">
		<input type="submit" value="Logout"/>
	</form:form>
</body>

</html>