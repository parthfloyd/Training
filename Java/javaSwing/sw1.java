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
		lbl1.setForeground(Color.black);
		lbl1.setBackground(Color.black);
		tft1 = new JTextField(45);
		tft1.setBackground(Color.pink);
		tar = new JTextArea("",12,51);
		cref.add(lbl1);
		cref.add(tft1);
		cref.add(tar);
	}
}