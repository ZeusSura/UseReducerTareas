
import { store } from 'react-notifications-component';
import React from 'react'
export const NotificacionDefault = (titulo,mensaje)=>{
    store.addNotification({
        title: titulo ,
        message: mensaje,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
        },
        dismissable: { click: true }
        
      });
}

export const NotificacionCustom = ()=>{
    store.addNotification({
        content:myNotification,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
        },
        dismissable: { click: true }
        
      });
}

const myNotification = ()=>{
    return(
       <h1>Mensaje</h1>
    )
}