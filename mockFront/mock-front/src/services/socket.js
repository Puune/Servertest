const socketIO = require('socket.io-client');

const baseString = 'http://localhost:9991';
var socket = null;

const init = () => {
  socket = socketIO.connect(baseString, {
    query: "Authorization=kaiku"
  });

  socket.on('connect', function(){
    console.log('connect');
  });
  
  socket.on('chatevent', function(data){
    console.log('chatevent', data);
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

  socket.emit('chatevent', jsonObj);
}

const sendMessageTo = (message, target) => {
  console.log(message + "  " + target);
  
  const jsonObj = {
    content: message,
    message_id: 55115,
    user_id: 123
  }

  const receivingGroup = socket.connect(baseString + "/" + target);

  receivingGroup.emit('chatevent', jsonObj);
  //receiver.disconnect();
}


const createGroup = (groupName) => {

  console.log(groupName);
  
  const jsonObj = {
    name: groupName,
    users: []
  }

  socket.emit('createevent', jsonObj);
}


export default {init, disconnect, sendMessage, createGroup, sendMessageTo }