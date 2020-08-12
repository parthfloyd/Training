<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>

<head>
<title>Customer Confirmation</title>
</head>

<body>
	The customer is confirmed: ${customer.firstName } ${customer.lastName }
	
	<br><br>
	
	Free passes: ${customer.freePasses}
	
	<br><br>
	
	Postal Code : ${customer.postalCode}
	
	<br><br>
	
	Course Code : ${customer.courseCode}
</body>
</html>