

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class credsSuccess
 */
@WebServlet("/credsSuccess")
public class credsSuccess extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public credsSuccess() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		//Printing out the success message!

		//Fetching cookie
		Cookie arr[] = request.getCookies();
		
		//Fetching Session
		HttpSession session = request.getSession();
		String nname = (String) session.getAttribute("sessItem");
		
		//Accessing hidden field input
		String country = request.getParameter("country"); //you can still access it because credsChecker forwarded to this page
		PrintWriter out = response.getWriter(); // it isn`t possible with sendRedirect();
		out.print("<h1> Country : " + country + "</h1>");
		out.print("<h1> Hello! "+ arr[0].getValue() +  "! you have successfully logged in! </h1><br>");
		out.print("Also since you mentioned, I also remember your nickname! "+ nname);
		out.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		
	}

}
