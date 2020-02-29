import React,{useState} from 'react';
import socket from '../services/socket';

const View = (props) => {

  const[form1, setForm1] = useState('');
  const[form2, setForm2] = useState('');
  const[form3, setForm3] = useState('');

  const clickPing = (event) => {
    event.preventDefault();
    socket.sendMessage('ping');
  }

  const createGroup = (event) => {
    event.preventDefault();
    socket.createGroup(form1, props.init.user_id);
  }

  const sendMessage = (event) => {
    event.preventDefault();
    socket.sendMessageTo(form3, form2);
  }

  const ChatList = (chats) => {

    if(chats === null){
      return <p></p>
    }

    return(
      <u>
        {chats.map((chat) => <li key={chat.chatName}><Chat chat={chat}/></li>)}
      </u>
    )
  }

  const Chat = (props) => {
    return(
      <div>
        <p>{props.chat.chatName}</p>
        <ul>
          {props.chat.messages.map((message) => <li key={message.message_id}>{message.content}</li>)}
        </ul>
      </div>
    )
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