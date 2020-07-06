import java.util.*;

interface temp{ //Interface with one method to facilitate a lambda function
    public void display(String Name);
}

public class lambdaPrac{
    String a;

    
    public static void main(final String[] args) {
        temp c = (String Name) ->{ //lambda function
            System.out.println("Helloo " + Name + "!!!");
        };
        c.display("Parth");

    }
}
