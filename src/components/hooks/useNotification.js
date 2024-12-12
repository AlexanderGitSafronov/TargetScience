import React,{useState,useEffect} from 'react'
import { v4 as uuidv4 } from "uuid";
export const useNotification = () => {
    const [notifications, setNotifications] = useState([]);
   
    useEffect(() => {
        const firstNoti = notifications[0]
        if(firstNoti){
            const timer = setTimeout(()=>{
                removeNotifications(firstNoti.id)
            }, firstNoti?.time ?? 1000)

            return ()=> clearTimeout(timer)
        }
    });


    const removeNotifications = (id) => {
        setNotifications([...notifications].filter((noti) => noti.id !== id))
    }

    const showNotification = (newNoti)=>{
        setNotifications(()=>[...notifications, {id: (uuidv4()) || 1, ...newNoti}])
    }

    return  {
        notifications, 
        showNotification,
        removeNotifications
    }
}
