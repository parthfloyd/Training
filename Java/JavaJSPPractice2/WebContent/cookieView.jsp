<%
Cookie arr[] = request.getCookies();
int l = arr.length;
for(int c=0; c<l;c++){
	out.println("<b> Name of the cookie: "+ arr[c].getName());
	out.println("Value of the cookie: "+ arr[c].getValue() + "<//b><br>");
}
%>