import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import React from 'react'
import Avatar from 'react-avatar'
import InputOptions from './InputOptions';
import './Post.css'


function Post({name, description, message, photoURL}) {
  return (
    <div className='post'>
        <div className="post-header">
        <Avatar className='post-avatar' src='https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg'/>
           
            <div className="post-info">
                <h2> {name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post-body">
            <p>{message}
            </p>
        </div>

        <div className="post-button">
            <InputOptions Icon={ThumbUpOffAltIcon} title='Like' color='gray' />
            <InputOptions Icon={ChatOutlinedIcon} title='Comment' color='gray' />
            <InputOptions Icon={ShareOutlinedIcon} title='Share' color='gray' />
            <InputOptions Icon={SendOutlinedIcon} title='Send' color='gray' />
        </div>
    </div>
  )
}

export default Post