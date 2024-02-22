import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
        <div className="header-left">
          <svg><LinkedInIcon color='primary'/></svg> 
          
       
       <div className="header-search">
           <SearchIcon/>
        
           <input type="text" placeholder='Search'/>
        </div>
        </div>

        <div className="header-right">
          <HeaderOption Icon={HomeIcon} title ='Home' />
          <HeaderOption Icon={SupervisorAccountIcon}title ='My Network' />
          <HeaderOption Icon={BusinessCenterIcon}title ='Jobs' />
          <HeaderOption Icon={ChatIcon}title ='Messaging' />
          <HeaderOption Icon={NotificationsIcon}title ='Notifications' />
          <HeaderOption avatar="https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg" title="Me" />

        </div>
    </div>
  )
}

export default Header