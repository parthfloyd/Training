

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class processServlet
 */
@WebServlet("/processServlet")
public class processServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public processServlet() {
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
//		doGet(request, response);
		response.setContentType("text/html"); //Setting content type
		
		//Declaring and fetching variables from indexServlet.jsp
		int num1,num2,num3 = 0,opt;
		num1 = Integer.parseInt(request.getParameter("fnum"));
		num2 = Integer.parseInt(request.getParameter("snum"));
		opt = Integer.parseInt(request.getParameter("opt"));
		
		//Creating object of printwriter to display output
		PrintWriter out = response.getWriter();
		
		switch(opt){
			case 1 : 
				num3 = num1 + num2;
				break;
			case 2 :
				num3 = num1 - num2;
				break;
			case 3:
				num3 = num1 * num2;
				break;
			case 4:
				num3 = num1 % num2;
				break;
			default:
				out.print("<b<<br> Invalid INPUT!!</br></b>");
		}
		out.print("<b>The output is : " + num3 + "</b>"); //Displaying output
	}

}
