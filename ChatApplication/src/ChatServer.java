import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.Map;

public class ChatServer {

    static ArrayList<String>userNames = new ArrayList<String>();
    //When server start it creates a list to store username

    static ArrayList<PrintWriter> printWriters = new ArrayList<PrintWriter>();
    //One PrintWriter for each client



    public static void main(String[] args) throws Exception {
        System.out.println("Waiting for clients...");
        ServerSocket ss = new ServerSocket(6001);//bind the socket
        while (true) {
            Socket soc = ss.accept();//accept the incoming socket
            System.out.println("Connection established");
            ConversationHandler handler = new ConversationHandler(soc);
            handler.start();//go to conversation handler
        }
    }
}

    class ConversationHandler extends Thread {
        Socket socket;
        BufferedReader in;
        PrintWriter out;
        String name;
        PrintWriter pw_log;//record all messages to a text file
        PrintWriter pw_name;//record username to a text file
        static FileWriter fw_log;
        static FileWriter fw_name;
        static BufferedWriter bw_log;
        static BufferedWriter bw_name;

        public ConversationHandler(Socket socket) throws IOException {
            this.socket = socket;
            fw_log = new FileWriter("./chatlogs.txt", true);
            fw_name = new FileWriter("./username.txt", true);
            bw_name = new BufferedWriter(fw_name);
            bw_log = new BufferedWriter(fw_log);
            pw_log = new PrintWriter(bw_log, true);
            pw_name = new PrintWriter(bw_name, true);
        }

        public void run() {
            try {
                ChatServer.userNames.add("");//to prevent user enter empty_string as username
                ChatServer.userNames.add("null");
                in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                out = new PrintWriter(socket.getOutputStream(), true);
                int count = 0;

                while (true) {//this loop handles user creation
                    if (count > 0) {
                        out.println("NameExists");
                    } else {
                        out.println("NameRequired");//The first time server will ask for name
                    }
                    name = in.readLine();
                    if (!ChatServer.userNames.contains(name)) {
                        ChatServer.userNames.add(name);

                        pw_name.println(name);//if there no such name exists then add it to list
                        break;
                    }
                    count++;//if there is already a name then increase count
                }
                out.println("NameAccepted" + name);
                ChatServer.printWriters.add(out);

                while (true)//this loop handles message display
                {
                    String message = in.readLine();

                    if (message == null) {
                        return;
                    }
                    if (message.equals("list")) {
                        System.out.println(name + " request a list operation");
                        for (String names : ChatServer.userNames) {
                            if(!names.equals("")&&!names.equals("null")) {
                                out.println(names);
                            }
                        }
                    } else if (message.startsWith("hide")) {
                        pw_log.println(name + ": " + message.substring(5));
                        System.out.println(name + ": " + message);
                        for (PrintWriter writer : ChatServer.printWriters) {
                            writer.println("Anonymous+: " + message.substring(5));

                        }
                    } else {
                        pw_log.println(name + ": " + message);
                        System.out.println(name + ": " + message);
                        for (PrintWriter writer : ChatServer.printWriters) {
                            writer.println(name + ": " + message);

                        }
                    }
                }
            }
            catch(Exception e){
                    System.out.println(e);
                }
            }
        }


