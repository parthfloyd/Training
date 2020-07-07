package JavaSwingsPractice;

import java.awt.*;
import javax.swing.JApplet;

public class JApplet1 extends JApplet {

    String str;
    public void init() {
        str = "Parth Panchal is learning Java Swings!";
    }

    public void paint(Graphics gr){
        gr.setFont(new Font("Helvetica", Font.ITALIC, 24));
        gr.drawString(str,100,25);
        
    }
}
