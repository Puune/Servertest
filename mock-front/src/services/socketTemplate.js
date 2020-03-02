const socketIO = require('socket.io-client');
const baseString = 'http://localhost:9991';
let socket = null;
var init = null;
let setInit = null;

/*
const SOCKET = {
  const socketTemplate = (data, _init, _setInit) => {
    socket = socketIO.connect(baseString + "/" + data.chatName);
    init = _init;
    setInit = _setInit;

    socket.on('chatEvent', function(data){
      console.log(data.chatName + data);
      setInit(init.concat(data));
    })
  }

  const sendMessage = (message) => {
    const jsonObj = {
      content: message,
      user_id: init.user_id
    }

    socket.emit('chatEvent', jsonObj);
  }

  return SOCKET
}
export default { SOCKET }
*/

/*
const SOCKET = {
  create: function(data, _init, _setInit) {
    socket = socketIO.connect(baseString + "/" + data.chatName);
    init = _init;
    setInit = _setInit;

    socket.on('chatEvent', function(data){
      console.log(data.chatName + data);
      setInit(init.concat(data));
    })
  },
  sendMessage: function(message){
    const jsonObj = {
      content: message,
      user_id: init.user_id
    }

    socket.emit('chatEvent', jsonObj);
  }
}

export default SOCKET;
*/

function SOCKET(_data, _init, _setInit){
  init = _init;
  setInit = _setInit;
  socket = socketIO.connect(baseString + "/" + _data.chatName, {
    query: `Authorization=${init.token}`
  });
  
  const name = _data.chatName; 

  socket.on('chatEvent', function(data){
    console.log(data.chatName + data);
    setInit(init.concat(data));
  })

  const sendMessage = (message) => {
    const jsonObj = {
      content: message,
      user_id: init.user_id
    }

    socket.emit('chatEvent', jsonObj);
  }
}

export default SOCKET;