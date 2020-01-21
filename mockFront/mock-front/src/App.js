import React, {useEffect} from 'react';
import './App.css';
import View from './modules/View';
import socket from './services/socket';

function App() {

  useEffect(()=> {
    socket.init();
  }, [])

  return (
    <div className="App">
      <View />
    </div>
  );
}

export default App;
