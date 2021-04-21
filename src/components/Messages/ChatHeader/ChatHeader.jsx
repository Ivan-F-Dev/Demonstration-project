import React from 'react'
import s from './ChatHeader.module.scss';

const ChatHeader = (props) => {
    return (
        <div className={s.chatHeader}>
            <div className={s.chatHeaderContent}>
                <div className={s.name}>{props.name}</div>
            </div>
            <div className={s.imgArea}>
                <div className={s.imgWrapper}>
                    <img src={props.img} className={s.img}/>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader;