import React, {useEffect, useState} from 'react';
import './App.css';
import View from './modules/View';
import socket from './services/socket';
import axios from 'axios';

function App() {

  const [init, setInit] = useState({token: "kaiku", chats: []});
  const[sockets, setSockets] = useState([]);

  console.log("init: ", init);
  

  return (
    <div className="App">
      <Initialization init={init} setInit={setInit} sockets={sockets} setSockets={setSockets} />
      <View init={init}/>
    </div>
  );
}


const Initialization = (props) => {
  const init = props.init;
  const setInit = props.setInit;
  const sockets = props.sockets;
  const setSockets = props.setSockets;

  const baseString = 'http://localhost:8080/';
  const userTemplate = (uName, uPSW, name) =>  ({username: uName, password: uPSW, name:name})
  const initUsers = [userTemplate('tester1', 'tester1', 'tester1'), userTemplate('tester2', 'tester2', 'tester2')];


  const handleSignIn = () => {
    axios.post(
      baseString + "users/" + initUsers[0].username,
      { username: initUsers[0].username, password: initUsers[0].password}
    ).then((response) => {
      console.log(response.data);
      setInit(response.data);
    })
  }

  const handleCreateUsers = () => {
    const adminconfig = {
      headers: {
        Authorization: "kaiku"
      }
    }

    initUsers.forEach(user => {
      axios.post(
        baseString + "/users",
        user,
        adminconfig
      ).then((response) => {
        console.log(response.data);
      })
    });
  }

  const connectSocket = () => {
    socket.init(init, props.setInit, sockets, setSockets);
  }

  return(
    <div>
      <button onClick={() => handleSignIn()}>sign in</button>
      <button onClick={() => handleCreateUsers()}>create test users</button>
      <button onClick={() => connectSocket()}>connect socket</button>
    </div>
  )
}

export default App;
