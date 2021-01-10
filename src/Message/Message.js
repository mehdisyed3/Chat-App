import React from 'react'
import './Message.css'

function Message() {
  return (
    <div className='message' >

      <p className='message__msg '>
        <span className='message__name'>Oni </span>
          this is a chat message Component :)
            <span className='message__timestamp'>
          {new Date().toUTCString()}
        </span>
      </p>

    </div>
  )
}

export default Message
