//<applet code  = "sw4" width = 900 height = 800> </applet>

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class sw4 extends JApplet implements ActionListener, ItemListener{
	JButton bt1, bt2;
	JLabel lbl1;
	JCheckBox married;

	//Radio Buttons
	ButtonGroup grp;
	JRadioButton rd1, rd2, rd3;
	JLabel lbl2;
	
	public void init(){
		Container ct = getContentPane();
		ct.setLayout(new FlowLayout());

		bt1 = new JButton("Submit");
		bt2 = new JButton("Reject");
		bt1.addActionListener(this); // Registering the buttons with
		bt2.addActionListener(this); // ActionListener

		lbl1 = new JLabel("Message will appear here");
		lbl2 = new JLabel("Subject choice will appear here");

		married = new JCheckBox("Married");
		married.addItemListener(this); //Registering checkbox with ItemListener

		grp = new ButtonGroup();
		rd1 = new JRadioButton("Physics");
		rd2 = new JRadioButton("Chemistry");
		rd3 = new JRadioButton("Maths");
		rd1.addActionListener(this);
		rd2.addActionListener(this);
		rd3.addActionListener(this);

		ct.add(lbl1);
		ct.add(bt1); ct.add(bt2);
		ct.add(married);
		ct.add(lbl2);
		ct.add(rd1); ct.add(rd2); ct.add(rd3);

	}

	public void actionPerformed(ActionEvent er){
		String str = er.getActionCommand();
		if(str.equals("Submit") || str.equals("Reject"))
			lbl1.setText("The user has "+ str + "ed the offer!!!");
		lbl2.setText("The user is interested in "+ str);
	}
	
	public void itemStateChanged(ItemEvent ie){
		boolean flag = married.isSelected();
		if(flag)
			lbl1.setText("Candidate is Married");
		else
			lbl1.setText("Candidate is Single!");
		
	}

}