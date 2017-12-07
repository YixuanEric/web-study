import java.io.*;
import java.nio.file.Files;
import java.util.Arrays;


public class count {


    public static int ByteToInt(byte[] b)
    {
        int value= 0;
        for(int i=0; i<b.length; i++)
            value = (value << 8) | b[i];
        return value;
    }
    public static void main(String args[]) throws IOException {
        PrintWriter out = new PrintWriter("out.txt");
        int pcknum=0;
        int offset= 0;
        try {
            byte[] array = Files.readAllBytes(new File("test1.pcap").toPath());
            byte[] header = Arrays.copyOfRange(array,0,23);
            byte[] pckheader = new byte[16];
            byte[] pcklen = new byte[4];
            byte[] ipheader = new byte[20];
            byte[] protcol = new byte[4];
            offset = offset + 24;
            int len;
            int i = offset;
            while(i<array.length){
                pckheader = Arrays.copyOfRange(array,i,i+16);
                pcklen = Arrays.copyOfRange(pckheader,12,16);
                len = java.nio.ByteBuffer.wrap(pcklen).order(java.nio.ByteOrder.LITTLE_ENDIAN).getInt();
                pcknum +=1;
                i = i + 16 + len;
            }
            out.println(pcknum);
            out.close();
        } catch(Exception e){
            System.out.print(e);
        }
    }
}
