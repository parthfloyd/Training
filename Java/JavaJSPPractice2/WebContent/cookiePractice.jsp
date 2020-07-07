<%--Remember to not add space in cookie name or values --%>
<%
Cookie ck1 = new Cookie("city1","NewYork");
Cookie ck2 = new Cookie("city2","London");
Cookie ck3 = new Cookie("city3","Amsterdam");
Cookie ck4 = new Cookie("city4","Stockholm");

response.addCookie(ck1);
response.addCookie(ck2);
response.addCookie(ck3);
response.addCookie(ck4);
%>
<html>
<body>
<a href ="cookieView.jsp"> Click here!</a>
</body>
</html>