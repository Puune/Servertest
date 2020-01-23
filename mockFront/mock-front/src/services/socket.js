const socketIO = require('socket.io-client');

const userName = 'user ' + window.location.port;
var socket = null;

const init = (chats, setChats) => {
  socket = socketIO.connect('http://localhost:9991');

  socket.on('connect', function(){
    console.log('connect');
  });
  
  socket.on('chatevent', function(data){
    console.log('chatevent');
    console.log(data);
    
    setChats(chats.concat({
      userName: data.userName,
      message: data.message
    }));
  });
  
  socket.on('disconnect', function(){
    console.log('disconnect');
    socket.disconnect();
  });
}

const disconnect = () => {

}

const sendMessage = (message) => {
  const jsonObj = {
    userName,
    message: message
  }

  socket.emit('chatevent', jsonObj);
}

const getSomething = () => {
  
}

export default {init, disconnect, sendMessage }