package authenticationActions;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class registerServlet
 */
@WebServlet("/registerServlet")
public class registerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public registerServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		
		response.setContentType("text/html"); // Setting Content Type
		
		//Fetching data from form
		String username = request.getParameter("uname");
		String password = request.getParameter("pass");
		
		//Registering Drivers and Creating connection to the database
		PrintWriter out = response.getWriter(); //creating a printWriter object
		Connection conn;
		//uploading data to the database
		try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		conn = DriverManager.getConnection("jdbc:mysql://localhost/noteDatabase","root","12345");
		
		String query = "insert into users(userName, password) values(?,?)"; //Query
		
		PreparedStatement pst = conn.prepareStatement(query); //Creating preparedStatement
		pst.setString(1, username);
		pst.setString(2, password);
		
		int n = pst.executeUpdate(); // Executing Query
		if(n==0) {
			RequestDispatcher rd = request.getRequestDispatcher("register.jsp");
			out.print("<h1> There seems to be an error, Please Try Again!..</h1><br>");
			rd.include(request, response);
			
		}
		else {
			//Creating a cookie
			Cookie cref = new Cookie("ckuname",username); 
			cref.setMaxAge(7*24*60*60); // setting age to 1 week
			response.addCookie(cref); // Adding cookie to the response
			response.sendRedirect("index.jsp"); //Redirecting to homepage
		}
		
		conn.close();
		}
		catch(Exception e) {
			out.print(e);
		}
		
	}

}
