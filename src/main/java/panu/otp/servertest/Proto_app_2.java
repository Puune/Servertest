package panu.otp.servertest;

import java.util.ArrayList;

import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOServer;

public class Proto_app_2 {
	public static void main(String[] args) {
		    	
    	//config
    	Configuration config = new Configuration();
    	config.setHostname("localhost");
    	config.setPort(9991);
    	final SocketIOServer server = new SocketIOServer(config);
    	
    	
    	
    	boolean running = true; 	
    	while(running) {
    		
    	}
	}
}
