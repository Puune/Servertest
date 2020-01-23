import React, {useEffect, useState} from 'react';
import './App.css';
import View from './modules/View';
import socket from './services/socket';

function App() {

  const [chats, setChats] = useState([]);

  useEffect(()=> {
    socket.init(chats, setChats);
  }, [])

  return (
    <div className="App">
      <View chats={chats}/>
    </div>
  );
}

export default App;
