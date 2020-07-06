
//Just wrote this code, but Applets are depreceated since java 9
import java.applet.*;
import java.awt.*;

public class javaAppletsPractice  extends Applet {
	String str = "";
	
	public void init() {
		str+="Control is in init()";
	}
	public void start() {
		str+=" in start() ";
	}
	public void paint(Graphics gr) {
		str+="in paint()";
		gr.drawString(str,100,120);
	}
}
