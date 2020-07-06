import java.io.*;

public class fileReadWriteJava {

	public static void main(String[] args) throws IOException{
		int val =0;
		FileInputStream fIn;
		FileOutputStream fOut;
		
		try {
			fIn = new FileInputStream("D:\\Work\\Training\\Training\\Java\\JavaBuffers\\src\\sample.txt");
			fOut = new FileOutputStream("D:\\Work\\Training\\Training\\Java\\JavaBuffers\\src\\newSample.txt");
			
		}
		catch(FileNotFoundException e){
			System.out.println(e.getMessage());
			return;
		}
		
		while(val != -1) {
			val = fIn.read();
			System.out.print((char) val);
			fOut.write(val);
		}
		
		fIn.close();

	}

}
