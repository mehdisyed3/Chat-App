import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, Mic, MoreVert, SearchOutlined  } from '@material-ui/icons'
import React, { useState } from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import './Chat.css'


function Chat() {
  const [input,setInput] = useState('')

  const sendMessage = () => {

  }

  return (
    <div className='chat'>

      <div className='chat__header'>
        <Avatar />
      
      <div className='chat__headerInfo'>
        <h3>Room Name</h3>
        <p>Last seen at..</p>
      </div>
      <div className='chat__headerRight'>
        <IconButton>
          <SearchOutlined />
        </IconButton>

        <IconButton>
          <AttachFile />
        </IconButton>

        <IconButton>
          <MoreVert />
        </IconButton>

      </div>
      </div>


      <div className='chat__body'>
        <p className='chat__message'>
          <span className='chat__name'>Oni </span>
          this is a chat message 
            <span className='chat__timestamp'>
              {new Date().toUTCString()}
            </span>
          </p>
          <p className='chat__message chat__reciever '>
          <span className='chat__name'>Oni </span>
          this is a chat message 
            <span className='chat__timestamp'>
              {new Date().toUTCString()}
            </span>
          </p>
          
      </div>
      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <form>
          <input
           value={input}
           onChange={(e)=> setInput(e.target.value)}
           placeholder="Type a message"
           type='text'
           />
           <button onClick={sendMessage} type='submit'>
            Send
           </button>
           <Mic/>
        </form>

      </div>
    </div>
  )
}

export default Chat
