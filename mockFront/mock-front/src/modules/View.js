import React from 'react';
import socket from '../services/socket';

const View = (props) => {

  const click = (event) => {
    event.preventDefault();
    socket.sendMessage('ping');
  }

  const socketContent = (chat) => {
    const id = Math.floor(Math.random() * 1000);
    console.log(id);
    
    return(
    <li key={id}>{chat.userName}: {chat.message}</li>
    )
  }

  return(
    <div>
      <button
        onClick={(event)=> click(event)}
        
      >send ping</button>
      <ul>
        {props.chats.map((chat) => socketContent(chat))}
      </ul>
    </div>
  )
}

export default View;