import java.applet.*;
import java.awt.*;
import java.awt.event.*;


public class javaAppletControls extends Applet implements ActionListener, ItemListener{ //Action Listener for button and lists , ItemListener for checkboxes
	TextField tft1, tft2;
	Label lb1, lb2;
	TextArea tar;
	Button bt1,bt2;
	Checkbox chk1;
	//Radio Buttons
	Checkbox rd1, rd2, rd3;
	CheckboxGroup grp;
	String str;
	
	List countries;
	
	public void init() {
		setLayout(new FlowLayout(FlowLayout.LEFT));
		
		tft1 = new TextField(35);
		tft1.setBounds(90,100,400,200);
		tft1.setFont(new Font("Times New Roman",Font.BOLD, 24));
		
		tft2 = new TextField(35);
		tft2.setBackground(Color.blue);
		
		lb1 = new Label("Enter your name!");
		lb2 = new Label("Enter your email id");
		
		tar = new TextArea("",24,78);
		
		chk1 = new Checkbox("Married");
		chk1.addItemListener(this); //Listener for action on checkbox
		
		//Checkbox group!
		grp = new CheckboxGroup();
		rd1 = new Checkbox("Maths",grp, false);
		rd1.addItemListener(this);
		rd2 = new Checkbox("Phyiscs",grp, false);
		rd2.addItemListener(this);
		rd3 = new Checkbox("Chemistry",grp, false);
		rd3.addItemListener(this);
		bt1 = new Button("Submit");
		bt2 = new Button("Cancel");
		bt2.addActionListener(this); // Listener for actions on button
		
		//List
		countries = new List(4,true); //true to enable multiple selection
		countries.add("India");
		countries.add("Germany");
		countries.add("China");
		countries.add("Russia");
		countries.add("Poland");
		countries.add("Austria");
	
		//adding controls to display
		add(lb1);
		add(tft1);
		add(lb2);
		add(tft2);
		add(tar);
		add(chk1);
		add(bt1);
		add(bt2);
		add(rd1);
		add(rd2);
		add(rd3);
		add(countries);
	}
	
	//Action Listener
	public void actionPerformed(ActionEvent ar) {
		//for button
		if(ar.getActionCommand().equals("Cancel")) {
			System.exit(0);
		}
		
		//for list
		int arr[] = countries.getSelectedIndexes();
		
		for(int i = 0; i<arr.length;i++) {
			str = str+ countries.getItem(arr[i]);
		}
		repaint();
	}
	
	/* Alternative to Action Listener is to use getSource
	 * 
	 * Button ref = (Button) ar.getSource();
	 * if(ref == bt2){
	 * 	System.exit(0);
	 * }
	 */
	
	//Item Listener
	public void itemStateChanged(ItemEvent ir) {
		
		//For checkbox
		boolean flag = chk1.getState();
		if(flag) {
			tft1.setText("Good Luck!");
		}
		else {
			tft1.setText("Enjoy while you can!");
		}
		
		//for radio buttons
		str = grp.getSelectedCheckbox().getLabel();
		str = "Candidate is interested in"+str;
		
		repaint();
	}
	
	public void paint(Graphics gr) {
		gr.setFont(new Font("Times New Roman", Font.ITALIC, 28));
		gr.drawString(str,400,100);
	}

}
