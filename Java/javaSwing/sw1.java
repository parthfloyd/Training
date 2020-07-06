//<applet code  = sw1.class width = 900 height = 700> </applet>
import javax.swing.*;
import java.awt.*;

public class sw1 extends JApplet
{
JTextField tft1;
JLabel lbl1;
JTextArea tar;

	public void init(){
		Container cref = getContentPane();
		cref.setLayout(new FlowLayout()); // setting the layout
		lbl1 = new JLabel("Enter your email id:");
		tft1 = new JTextField(45);
		tar = new JTextArea("",51,12);
		cref.add(lbl1);
		cref.add(tft1);
	}
}