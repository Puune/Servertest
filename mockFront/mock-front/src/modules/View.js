import React from 'react';
import socket from '../services/socket';

const View = () => {

  const click = () => {
    socket.sendMessage('ping');
  }

  const socketContent = () => {
    
  }

  return(
    <div>
      <button
        onClick={()=> click()}
        
      >send ping</button>
    </div>
  )
}

export default View;