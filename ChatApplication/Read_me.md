This is a ChatRoom Application that can support multiple clients to chat at the same time.
This project is to practice socket programming with Java.

The chat room can support:
	1.Unique Username Login(no password)
	2.Send Anonymous message
	3.List All Users
	4.Multiple user chat at the same time
	5.Does not crush when one client exit
	6.Server side monitoring message
	7.A txt that log all messages
	8.A txt that have all usernames
	9.Very simple GUI

The chat room does not support:
	1.password Login 
	// I forget to implement password at the first place. When I realized that I have to associate username with password,
	   I knew I used wrong data structure. I should have use map instead of ArrayList to store usernames. I could also
	   create a 'User' object that has password field in it and put in my ArrayList but most of the code had to be rewrite.
	   
	2.send message to specific user
	// Each thread has a PrinterWriter and all of them have the same variable name "out" and they are stored in one ArrayList, 
	   I don't know how to pull out one specific thread and let its writer to push message onto one user's screen.

	
About Error Handling:
	1.The IP address prompt will keep asking for correct address if address is wrong.
	2.The Username prompt will keep asking for username if nothing is typed in or 		username existed.
	
	   
	