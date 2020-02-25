package panu.otp.servertest;

import java.util.ArrayList;
import java.util.Collection;
import java.util.UUID;

import com.corundumstudio.socketio.*;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import com.corundumstudio.socketio.listener.MultiTypeEventListener;

public class App 
{
    public static void main( String[] args ) throws InterruptedException
    {
    	Configuration config = new Configuration();
    	config.setHostname("localhost");
    	config.setPort(9991);
    	
    	final ArrayList<SocketIONamespace> namespaces = new ArrayList<SocketIONamespace>();
    	
    	final SocketIOServer server = new SocketIOServer(config);
    	
    	namespaces.add(server.addNamespace("/stuff"));
    	
    	
    	server.addEventListener("createevent", CreateRequestObject.class, new DataListener<CreateRequestObject>() {
			public void onData(SocketIOClient client, CreateRequestObject data, AckRequest ackSender) throws Exception {
				System.out.println(data.getName());
				namespaces.add(nameSpaceSetup(server, data.getName()));
			}
		});
    	
    	
    	server.addEventListener("chatevent", ChatObject.class, new DataListener<ChatObject>() {
			public void onData(SocketIOClient client, ChatObject data, AckRequest ackSender) throws Exception {
				server.getBroadcastOperations().sendEvent("chatevent", data);
				System.out.println(data.getContent());
			}
		});
    	    	
    	server.start();
    	
    	while(true) {
    		for (SocketIONamespace namespace : namespaces) {
				System.out.println(namespace.getName());
			}
    		Thread.sleep(5000);
    	}
   }
    	
    	public static SocketIONamespace nameSpaceSetup(SocketIOServer server, String name) {
    		
    		final SocketIONamespace namespace = server.addNamespace(name);
    		
    		namespace.addEventListener("chatevent", ChatObject.class, new DataListener<ChatObject>() {
    			public void onData(SocketIOClient client, ChatObject data, AckRequest ackSender) throws Exception {
    				namespace.getBroadcastOperations().sendEvent("chatevent", data);
    				System.out.println(data.getContent());
    			}
    		});
    		
    		return namespace;
    	}
}
