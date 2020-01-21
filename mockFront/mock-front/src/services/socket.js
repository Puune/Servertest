const socketIO = require('socket.io-client');

const userName = 'user';
var socket = null;

const init = () => {
  socket = socketIO.connect('http://localhost:9991');

  socket.on('connect', function(){
    console.log('connect');
  });
  
  socket.on('chatevent', function(){
    console.log('chatevent');
  });
  
  socket.on('disconnect', function(){
    console.log('disconnect');
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