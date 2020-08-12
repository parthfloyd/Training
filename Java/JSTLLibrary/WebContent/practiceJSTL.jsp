<%@taglib prefix = "c" uri ="http://java.sun.com/jsp/jstl/core" %>

<html>
<body>
<c:set var="city" value="Melbourne"></c:set>
<c:out value= "${city }">No city value</c:out>

<%-- Practicing forEach loop--%>

<c:forEach var = "rollno" begin = "400" end = "10000" step = "500">
<c:out value = "${rollno}"></c:out>
</c:forEach>

<%-- Practicing choose when and otherwise jstl--%>
<br>

<c:set var = "dummy" value = "25"></c:set>
<c:choose>

<c:when test = "${dummy > 0 }">
The value is Positive!
</c:when>

<c:when test = "${dummy == 0 }">
The value is Zero!
</c:when>

<c:when test = "${dummy < 0 }">
The value is Negative!
</c:when>

<c:otherwise>
Invalid Value!
</c:otherwise>

</c:choose>
</body>
</html>