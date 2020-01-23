package panu.otp.servertest;

public class ChatObject {
	private String userName;
	private String message;
	
	public ChatObject() {
	}
	
	public ChatObject(String userName, String message) {
		this.userName = userName;
		this.message = message;
	}
	
	public String getMessage() {
		return message;
	}
	
	public String getUserName() {
		return userName;
	}
}
