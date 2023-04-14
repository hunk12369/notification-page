import React from 'react'
import "./NotificationHeadContainer.css"
const NotificationHead = () => {
  return (
    <div className='notification-head'>
        <div className='notification-number-container'>
            <p>Notifications</p>
            <div className='notification-number'>3</div>
        </div>
        
        <button>Mark all as read</button>
        
    </div>
  )
}

export default NotificationHead