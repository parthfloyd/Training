package noteActions;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.Calendar;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class createNoteServlet
 */
@WebServlet("/createNoteServlet")
public class createNoteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public createNoteServlet() {
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
		
		//Fetching input
		String uuser = request.getParameter("nuser");
		String noteTitle = request.getParameter("ntitle");
		String noteContent  = request.getParameter("ncontent");
		Calendar cal = Calendar.getInstance();  
		java.sql.Timestamp noteDateTime = new java.sql.Timestamp(cal.getTimeInMillis()); //to insert datetime object in sql
		
		//creating connection to the database
		Connection conn;
		//uploading data to the database
		try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		conn = DriverManager.getConnection("jdbc:mysql://localhost/noteDatabase","root","12345");
		
		String query = "insert into notes(notesUser,notesTitle,notesContent,notesTime) values(?,?,?,?)";
		PreparedStatement pst = conn.prepareStatement(query);
		pst.setString(1,uuser);
		pst.setString(2,noteTitle);
		pst.setString(3, noteContent);
		pst.setTimestamp(4, noteDateTime);
		
		pst.executeUpdate();
		
		conn.close();
		
		response.sendRedirect("index.jsp");
		}
		catch(Exception e) {
			PrintWriter out = response.getWriter();
			out.print("sorry an error encountered,please try again );");
			RequestDispatcher rd = request.getRequestDispatcher("createNote.jsp");
			rd.include(request, response);
		}
	}

}
