import React from 'react'
import "./NotificationCard.css"
const NotificationCard = (props) => {
    const notificacion = props.notificacion
    return (
    <div className="notification-container">
        <img src={notificacion.imgsrc} alt="" />
        <div className='notification-container-content'>
            <p><span>{notificacion.name}</span> {notificacion.activity} <button>.</button>
            <div className="time">{notificacion.time}</div></p>
        </div>
        
    </div>
  )
}

export default NotificationCard