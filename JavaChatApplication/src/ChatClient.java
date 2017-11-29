import com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;



public class ChatClient {
    static JFrame chatWindow = new JFrame("Hoosier Chat room");
    static JTextArea chatArea = new JTextArea(22,40);
    static JTextField textField = new JTextField(40);
    static JLabel blankLabel = new JLabel("Click Send or Press Enter to Say Something");
    static JButton sendBUtton = new JButton("send");
    static JButton hideBUtton = new JButton("send anonymously");
    static JButton listBUtton = new JButton("List all users");
    static JLabel nameLabel = new JLabel("     ");

    static BufferedReader in;
    static PrintWriter out;

    static String username;
    static String temp;

    ChatClient(){

        chatWindow.setLayout(new FlowLayout());
        chatWindow.add(nameLabel);
        chatWindow.add(new JScrollPane(chatArea));
        chatWindow.add(blankLabel);
        chatWindow.add(textField);
        chatWindow.add(sendBUtton);
        chatWindow.add(hideBUtton);
        chatWindow.add(listBUtton);

        chatWindow.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        chatWindow.setSize(475,520);
        chatWindow.setLocation(800,400);
        chatWindow.setVisible(true);
        textField.setEditable(false);
        chatArea.setEditable(false);

        sendBUtton.addActionListener(new Listener(1));
        textField.addActionListener(new Listener(1));
        hideBUtton.addActionListener(new Listener(2));
        listBUtton.addActionListener(new Listener(3));

    }
    void startChat() throws IOException{

            String ipaddress = JOptionPane.showInputDialog(
                    chatWindow,
                    "Enter IP Address: (for example:\"127.0.0.1\")",
                    "IP address Required!",
                    JOptionPane.PLAIN_MESSAGE);


            try {
                Socket soc = new Socket(ipaddress, 6001);
                in = new BufferedReader(new InputStreamReader(soc.getInputStream()));
                out = new PrintWriter(soc.getOutputStream(), true);

            }
            catch(IOException e) {
                startChat();
            }


        while(true){

                String str=in.readLine();//get username identification from the server

                if(str.equals("NameRequired")){
                    String name = JOptionPane.showInputDialog(
                            chatWindow,
                            "Enter a unique name: ",
                            "Name Required",
                            JOptionPane.PLAIN_MESSAGE);

                    out.println(name);

                }
                else if(str.equals("NameExists")){
                    String name = JOptionPane.showInputDialog(
                    chatWindow,
                            "Enter another name: ",
                            "Name Already Exists or Invalid Username!",
                            JOptionPane.WARNING_MESSAGE);

                    out.println(name);
                }
                else if(str.startsWith("NameAccepted")){
                    textField.setEditable(true);
                    nameLabel.setText("Logged in as: "+str.substring(12));
                    username = str.substring(12);
                    temp = str.substring(12);

                }
                else{
                    chatArea.append(str+"\n");
                }
        }
    }


    public static void main(String[] args) throws Exception{
        ChatClient client = new ChatClient();
        client.startChat();
    }
}


class Listener implements ActionListener {
    int n;

    public Listener(int n){
        this.n = n;
    }
    @Override
    public void actionPerformed(ActionEvent e) {


        if(n==1) {//send
            ChatClient.out.println(ChatClient.textField.getText());
            ChatClient.textField.setText("");
        }
        else if(n==2){//become anonymous
            ChatClient.out.println("hide/"+ChatClient.textField.getText());
        }
        else if(n==3){//list
            ChatClient.out.println("list");
            }
        }
    }


