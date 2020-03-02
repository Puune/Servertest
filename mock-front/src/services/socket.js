import React, {useState} from 'react';
import SOCKET from './socketTemplate';

const socketIO = require('socket.io-client');

const baseString = 'http://localhost:9991';
var socket = null;
var _sockets = null;
var _setSockets = null;

const init = (init, setInit, sockets, setSockets) => {

  _sockets = sockets;
  _setSockets = setSockets;

  console.log("chats: ", init.chats);
  
  console.log("sockets: ", sockets);

  init.chats.forEach(chat => {
    setSockets(sockets.concat(new SOCKET(chat, init, setInit)))
  });

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

  socket.on('createChatEvent', function(data){
    console.log('createChatEvent', data);
    let newInit = init;
    newInit = newInit.chats.concat(data);
    setInit(newInit);

    setSockets(sockets.concat(new SOCKET(data, init, setInit)));
  })
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
  console.log("sockets", _sockets);
  
  const socket = _sockets.find(socket => socket.name === target);

  console.log("sending to: ",socket);
  

  socket.sendMessage(message);
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


export default {init, sendMessage, createGroup, sendMessageTo }