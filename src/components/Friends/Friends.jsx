import React from 'react'
import s from './Friends.module.scss';
import {Redirect} from "react-router-dom";


const Friends = () => {

    let id = localStorage.authId
    if (!id) return <Redirect to={'/login'}/>

    return (
        <div className={s.friends}>
            Friends
        </div>
    )
}




export default Friends;