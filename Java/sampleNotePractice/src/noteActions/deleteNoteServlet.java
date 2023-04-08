package noteActions;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class deleteNoteServlet
 */
@WebServlet("/deleteNoteServlet")
public class deleteNoteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public deleteNoteServlet() {
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
		int noteId = Integer.parseInt(request.getParameter("noteNumber"));
		PrintWriter out = response.getWriter();
		RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
		//Fetching username from cookie TO MAKE SURE ANOTHER USER DOESN`t DELETE NOTE BY MISTAKE
		Cookie loginRef[] = request.getCookies();
		String userName = "";
		for(Cookie y : loginRef){
			if(y.getName().equals("ckuname")){
				userName = y.getValue();
			}
		}
		
		Connection conn; //creating connection
		try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		conn = DriverManager.getConnection("jdbc:mysql://localhost/noteDatabase","root","12345");
		
		String query = "delete from notes where idnotes = ? AND notesUser = ?";
		PreparedStatement pst = conn.prepareStatement(query);
		pst.setInt(1, noteId);
		pst.setString(2, userName);
		int rowCount = pst.executeUpdate();
		if(rowCount == 0) {
			out.print("Error: There was an error while deleting the note, please enter id correctly!");
			rd.include(request, response);
		}
		else
			response.sendRedirect("index.jsp");
		}
		catch(Exception e) {
			out.print("Error: "+ e.getMessage());
			rd.forward(request, response);
		}
	}

}
