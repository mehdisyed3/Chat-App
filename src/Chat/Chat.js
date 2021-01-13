import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, Mic, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import Message from '../Message/Message'
import './Chat.css'

// 957
function Chat() {
  const [input, setInput] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()

  }

  return (
    <div className='chat'>

      <div className='chat__header'>
        <Avatar />

        <div className='chat__headerInfo'>
          <h3>amsterdam trip</h3>
          <p>Last seen at.. 2:34 pm</p>
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
        <Message />

      </div>
      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type='text'
          />
          <button onClick={sendMessage} type='submit'>
            Send
           </button>
          <Mic />
        </form>

      </div>
    </div>
  )
}

export default Chat
