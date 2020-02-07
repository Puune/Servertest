import React from 'react';
import socket from '../services/socket';

const View = () => {

  const clickPing = () => {
    socket.sendMessage('ping');
  }

  const clickLogin = () => {
    socket.login();
  }

  const socketContent = () => {
    
  }

  return(
    <div>
      <button
        onClick={()=> clickPing()}
        
      >send ping</button>

      <button
        onClick={()=> clickLogin()}
      >
        Login
      </button>
    </div>
  )
}

export default View;