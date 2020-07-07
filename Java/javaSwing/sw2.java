// <applet code = sw2.class width = 900 height  = 800> </applet>
import javax.swing.*;
import java.awt.*;

public class sw2 extends JApplet{
	JLabel lbl1;
	JTextField tft1;
	JCheckBox chk1;

	public void init(){
		Container ct = getContentPane();
		ct.setLayout(null);
		lbl1 = new JLabel("Enter the name of your birth city");
		tft1 = new JTextField(45);	
		lbl1.setBounds(25,60,350,35);
		tft1.setBounds(200,100,150,35);
		lbl1.setFont(new Font("Times New Roman",Font.ITALIC, 24));
		chk1 = new JCheckBox("Income Tax Payer");
		chk1.setBounds(25,150,350,50);
		ct.add(lbl1);
		ct.add(tft1);
		ct.add(chk1);
	}
}