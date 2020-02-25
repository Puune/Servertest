package panu.otp.servertest;

public class CreateRequestObject {
	private String name;
	private String[] users;
	
	public CreateRequestObject(String name, String[] users) {
		this.name = name;
		this.users = users;
	}
	
	public CreateRequestObject() {}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String[] getUsers() {
		return users;
	}

	public void setUsers(String users[]) {
		this.users = users;
	}
	
	
}
