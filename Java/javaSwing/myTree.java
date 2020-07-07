//<applet code = "myTree" width = 1000 height = 1000> </applet>
import javax.swing.*;
import java.awt.*;
import javax.swing.tree.*;

public class myTree extends JApplet{
JTree Countries;
	public void init(){
		Container ct = getContentPane();
		ct.setLayout(null);
		DefaultMutableTreeNode nations = new DefaultMutableTreeNode("Nations"); //root node
		DefaultMutableTreeNode ind = new DefaultMutableTreeNode("India");
		DefaultMutableTreeNode usa = new DefaultMutableTreeNode("America");
		DefaultMutableTreeNode nz = new DefaultMutableTreeNode("NewZealand");
		DefaultMutableTreeNode del = new DefaultMutableTreeNode("New Delhi");
		DefaultMutableTreeNode wash = new DefaultMutableTreeNode("Washington");
		DefaultMutableTreeNode welling = new DefaultMutableTreeNode("Wellington");
		nations.add(ind); nations.add(usa); nations.add(nz); ind.add(del); usa.add(wash); nz.add(welling);

		Countries = new JTree(nations); //root node as an argument
		Countries.setBounds(100,120,300,350);
		Countries.setFont(new Font("Arial", Font.BOLD, 18));
		Countries.setBackground(Color.black);
		Countries.setForeground(Color.white);

		ct.add(Countries);
	}
}