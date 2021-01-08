import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import { Avatar, IconButton } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import SidebarChat from '../SidebarChat/SidebarChat'

function Sidebar() {
  return (
    <div className='sidebar'>

      <div className='sidebar__header'>
        <Avatar src='https://avatars1.githubusercontent.com/u/21147250?s=88&
        u=2e46b2ce19e4bcb38b64392b265d960f77cbc43a&
        v=4' />
        <div className='sidebar__headerRight'>

          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

      </div>
      <div className='sidebar__search'>
     
        <div className='sidebar__searchContainer'>
          
          <SearchOutlined />
          <input type='text' placeholder='Search or start new chat' />

        </div>

      </div>
      <div className='sidebar__chats'>
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar


