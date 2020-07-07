package JavaSwingsPractice;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class JApplet2 extends JApplet implements ActionListener{
    JLabel lbl1;
    JPasswordField pst;
    JButton bt1;
    String str ="";
    
    public void init() {
        
        Container ct = getContentPane();
        ct.setLayout(new FlowLayout());
        lbl1 = new JLabel("Enter the Password!");
        pst = new JPasswordField(25);
        bt1 = new JButton("Submit");
        bt1.addActionListener(this);
        add(lbl1); add(pst); add(bt1);
        
    }
    
    public void actionPerformed(ActionEvent er){
        String val  = er.getActionCommand();
        if(val.equals("Submit")){
            if(pst.getText().equals("India"))
                str = "You are an authorized user";
            else
                str = "You are unauthorized user";
        JOptionPane.showMessageDialog(null, str); // null refers to the parent component
        }
        
    }
    
   
}
