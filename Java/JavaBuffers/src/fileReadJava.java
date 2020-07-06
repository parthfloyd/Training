import java.io.*;
public class fileReadJava {

	public static void main(String[] args) throws IOException {
		int val =0;
		FileInputStream fIn;
		
		try {
			fIn = new FileInputStream("D:\\Work\\Training\\Training\\Java\\JavaBuffers\\src\\sample.txt");
			
		}
		catch(FileNotFoundException e){
			System.out.println(e.getMessage());
			return;
		}
		
		while(val != -1) {
			val = fIn.read();
			System.out.print((char) val);
		}
		
		fIn.close();
	}

}
