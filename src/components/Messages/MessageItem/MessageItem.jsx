import React from 'react'
import s from './MessageItem.module.scss';
import AvatarCat from "./../../../img/AvatarCat.jpg"

const MessageItem = (props) => {
    return (
        <div className={s.MessageItem}>
            <div className={s.imgArea}>
                <div className={s.imgWrapper}>
                    <img src={props.img} className={s.img}/>
                </div>
            </div>
            <div className={s.MessageItemContent}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.text}>
                    {props.content}
                </div>
            </div>
        </div>
    )
}


export default MessageItem;