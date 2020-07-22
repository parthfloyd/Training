<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>

<head>
<title>Student Form</title>
</head>

<body>
	
	<form:form action="processForm" modelAttribute="student">
		First Name : <form:input path= "firstName"/>
		<br><br>
		Last Name : <form:input path= "lastName"/>
		<br><br>
		Country: 
		<form:select path="country">
			<form:options items="${student.countryOptions}"/>
			<%--<form:option value="India" label="India"/>
			<form:option value="Pakistan" label="Pakistan"/>
			<form:option value="Bangladesh" label="Bangladesh"/>
			<form:option value="Sri Lanka" label="Sri Lanka"/> --%>
		</form:select>
		<br><br>
		Favorite Language:
		
		Java <form:radiobutton path="favoriteLanguage" value="Java"/>
		Python <form:radiobutton path="favoriteLanguage" value="Python"/>
		JavaScript <form:radiobutton path="favoriteLanguage" value="JavaScript"/>
		Ruby <form:radiobutton path="favoriteLanguage" value="Ruby"/>
		<br><br>
		
		Operating Systems:
		
		Linux <form:checkbox path="operatingSystems" value="Linux"/>
		Mac OS <form:checkbox path="operatingSystems" value="Mac OS"/>
		Windows <form:checkbox path="operatingSystems" value="Windows"/>				
		<br><br>
		<input type = "submit" value = "Submit"/>
	
	</form:form>
	
</body>

</html>