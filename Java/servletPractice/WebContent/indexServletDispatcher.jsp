<html>
<body>
<h1>Enter the credentials!</h1>
<form method = "post" action = "credsChecker">
<label>Enter the username: </label> <input type = "text" name = "uname">
<label>Enter a Temporary Nickname</label> <input type = "text" name = "nname">
<label>Enter the password: </label> <input type = "password" name = "pwd">
<!--  Hidden Field -->
<input type = "hidden" name = "country" value = "India">
<input type = "submit" value = "Check Credentials!">

<!-- Url Redirecting demo
add this link on the html page
<a href = "servletName?var1=" + varVal1 + "&var2=" + varVal2"> click here </a>
Now in servlet get these parameters in the doGet method! using getParameter("var1")
 -->
</form>
</body>
</html>