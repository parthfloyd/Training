import java.io.*;

public class javaBuffer {
	public static void main(String[] args) throws IOException {
		
		String name;
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		System.out.println("Enter the name of the Candidate:");
		name = br.readLine();
		System.out.println("Name of the candidate is " + name);
		
	}
}