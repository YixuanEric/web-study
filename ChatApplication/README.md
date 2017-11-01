<h2>This is a ChatRoom Application that can support multiple clients to chat at the same time. <h2>
<h3>This project is to practice socket programming with Java. <h3>

The chat room can support:<br />
	1.Unique Username Login(no password)<br />
	2.Send Anonymous message<br />
	3.List All Users<br />
	4.Multiple user chat at the same time<br />
	5.Does not crush when one client exit<br />
	6.Server side monitoring message<br />
	7.A txt that log all messages<br />
	8.A txt that have all usernames<br />
	9.Very simple GUI<br />

The chat room does not support:<br />
	1.password Login <br />
	// I forget to implement password at the first place. When I realized that I have to associate username with password,
	   I knew I used wrong data structure. I should have use map instead of ArrayList to store usernames. I could also
	   create a 'User' object that has password field in it and put in my ArrayList but most of the code had to be rewrite.<br />
	2.send message to specific user<br />
	// Each thread has a PrinterWriter and all of them have the same variable name "out" and they are stored in one ArrayList,I don't know how to pull out one specific thread and let its writer to push message onto one user's screen.

	
About Error Handling:<br />
	1.The IP address prompt will keep asking for correct address if address is wrong.<br />
	2.The Username prompt will keep asking for username if nothing is typed in or username existed.
	
	   
	
