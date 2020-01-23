package panu.otp.servertest;

import java.util.ArrayList;

import com.corundumstudio.socketio.*;
import com.corundumstudio.socketio.listener.DataListener;

public class Proto_app_1 
{
    public static void main( String[] args ) throws InterruptedException
    {
    	Configuration config = new Configuration();
    	config.setHostname("localhost");
    	config.setPort(9991);
    	
    	final SocketIOServer server = new SocketIOServer(config);
    	server.addEventListener("chatevent", ChatObject.class, new DataListener<ChatObject>() {
			public void onData(SocketIOClient client, ChatObject data, AckRequest ackSender) throws Exception {
				server.getBroadcastOperations().sendEvent("chatevent", data);
				System.out.println(data.getMessage());
			}
		});
    	    	
    	server.start();
    	
    	Thread.sleep(Integer.MAX_VALUE);
    	
    	server.stop();
    }
}
