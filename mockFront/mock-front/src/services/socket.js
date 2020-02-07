const socketIO = require('socket.io-client');

const userName = 'user';
var socket = null;

const init = () => {
  socket = socketIO.connect('http://localhost:9991');

  socket.on('connect', function(){
    console.log('connect');
  });
  
  socket.on('chatevent', function(data){
    console.log('chatevent', data);
  });
  
  socket.on('disconnect', function(){
    console.log('disconnect');
  });

  socket.on('loginevent', function(data){
    console.log('User logged with auth', data.auth);
  })
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

const login = (name) => {
  const jsonObj = {
    user_id: "66",
    username: "me",
    password: "meme",
    name: "em"
  }
  socket.emit('loginevent', jsonObj);
}

const getSomething = () => {
  
}

export default {init, disconnect, sendMessage, login }