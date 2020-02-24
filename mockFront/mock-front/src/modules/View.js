import React,{useState} from 'react';
import socket from '../services/socket';

const View = () => {

  const[form1, setForm1] = useState('');
  const[form2, setForm2] = useState('');
  const[form3, setForm3] = useState('');

  const clickPing = (event) => {
    event.preventDefault();
    socket.sendMessage('ping');
  }

  const createGroup = (event) => {
    event.preventDefault();
    socket.createGroup(form1);
  }

  const sendMessage = (event) => {
    event.preventDefault();
    socket.sendMessageTo(form3, form2);
  }

  return(
    <div>
      <button
        onClick={(event)=> clickPing(event)}
        value={form1}
      >send ping</button>

      <br></br>

      <form>
        group name
        <input onChange={(event)=> setForm1(event.target.value)}/>
        <button onClick={(event) => createGroup(event)}>
          send request
        </button>
      </form>

      <form>
        send chat to:
        <input onChange={(event) => setForm2(event.target.value)}/>
        message
        <input onChange={(event) => setForm3(event.target.value)} />
        <button onClick={(event) => sendMessage(event)}>
          send
        </button>
      </form>
    </div>
  )
}

export default View;