import React from 'react'
import notificaciones from '../assets/notification.json'
import NotificationCard from './NotificationCard'

const NotificationContainer = () => {
        return (
    
    <div>
        {
        notificaciones.map((notificacion)=>{
                return <NotificationCard notificacion={notificacion} key={notificacion.id}/>
              })
        }
        
        
    </div>
  )
}

export default NotificationContainer