const socketIO = require('socket.io-client');

const baseString = 'http://localhost:9991';
var socket = null;

const init = async (init) => {
  
  socket = socketIO.connect(baseString, {
    query: `Authorization=${init.token}`
  });

  socket.on('connect', function(){
    console.log('connect');
  });
  
  socket.on('chatEvent', function(data){
    console.log('chatEvent received', data);
  });
  
  socket.on('disconnect', function(){
    console.log('disconnect');
  });
}

const disconnect = () => {

}

const sendMessage = (message) => {
  const jsonObj = {
    content: message,
    message_id: 312,
    user_id: 3223
  }

  socket.emit('chatEvent', jsonObj);
}

const sendMessageTo = (message, target) => {
  console.log("emit",message + "  " + target);
  
  const jsonObj = {
    content: message,
    message_id: 55115,
    user_id: 123
  }

  const receivingGroup = socket.connect(baseString + "/" + target);

  receivingGroup.emit('chatEvent', jsonObj);
  //receiver.disconnect();
}


const createGroup = (groupName, user_id) => {

  console.log(groupName);
  
  const jsonObj = {
    chatName: groupName,
    users: [user_id]
  }

  console.log("emit",jsonObj);
  

  socket.emit('createChatEvent', jsonObj);
}


export default {init, disconnect, sendMessage, createGroup, sendMessageTo }