import React from 'react'
import Avatar from 'react-avatar'
import './Sidebar.css'
import BookmarkIcon from '@mui/icons-material/Bookmark';

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar-recentItems'>
            <span className='sidebar-hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        <div className="sidebar-top">
            <img src="https://img.freepik.com/free-vector/watercolor-stains-abstract-background_23-2149107181.jpg?w=2000" alt="" />
            <Avatar className='sidebar-avatar' src='https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg'/>
            <h2> Khushi Sidana</h2>
            <h4> sidana.khushi@gmail.com</h4>

        </div>

        <div className="sidebar-stats">
            <div className="sidebar-stat">
                <p> Who's viewed your profile</p>
                <p className="sidebar-statno">45</p>
            </div>
            <div className="sidebar-stat ">
                    <p>Connections</p>

                    <p className="sidebar-statno">396</p>
                 
            </div>
            <p className="grow">Grow your Network</p>
        </div>

        <div className="sidebar-premium">
            <p>Acess exclusive tools & insights</p>
            <p className="bold">Retry Premium Free</p>
        </div>

        <div className="items">
            < BookmarkIcon  sx={{ fontSize: 17 }} color='action'/>
            <p>My items</p>
        </div>
        <div className="sidebar-bottom">
            <p>Recent</p>
{recentItem('reactjs')}
{recentItem('programming')}
{recentItem('software engineering')}
{recentItem('software design')}
{recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar