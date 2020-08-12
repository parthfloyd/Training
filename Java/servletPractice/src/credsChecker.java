

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class credsChecker
 */
@WebServlet("/credsChecker")
public class credsChecker extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public credsChecker() {
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
		//doGet(request, response);
		
		response.setContentType("text/html"); //setting content type
		
		//Declaring and fetching variables from form
		String uname = request.getParameter("uname");
		String pwd = request.getParameter("pwd");
		String nname = request.getParameter("nname");
		
		//checking credentials and forwarding to success on correct combination , otherwise including an error message!
		if(uname.equals("root") && pwd.contentEquals("12345")) {
			//You can also use sendRedirect Method it will display the page on the url aswell
			//response.sendRedirect("credsSuccess");
			
			//Creating a cookie
			Cookie cref = new Cookie("ckuname",uname); 
			cref.setMaxAge(365*24*60*60); // setting age to 1 year,Also to delete a cookie setMaxAge(0)
			response.addCookie(cref); // Adding cookie to the response
			//Write cookie code in doGet since you are using RequestDispatcher
			
			//Creating a session
			HttpSession session = request.getSession();	
			session.setAttribute("sessItem",nname);
			
			//Forwarding to the successpage
			RequestDispatcher rd = request.getRequestDispatcher("credsSuccess"); // if credentials are successful
			rd.forward(request, response);
		}
		else {
			PrintWriter out = response.getWriter();
			out.print("<h1> Sorry invalid Credentials, Please Try Again!!</h1>");
			out.close();
			
			RequestDispatcher rd = request.getRequestDispatcher("indexServletDispatcher.jsp"); // if there is an error, including an error message
			rd.include(request, response);
		}
	}

}
