import React from 'react'
import s from './ChatHeader.module.scss';
import Avatar from "@material-ui/core/Avatar";

const ChatHeader = (props) => {
    return (
        <div className={s.chatHeader}>
            <div className={s.chatHeaderContent}>
                <div className={s.name}>{props.currentChat.info.name === null ? 'name' : props.currentChat.info.name}</div>
            </div>
            <div className={s.imgArea}>
                <div className={s.imgWrapper}>
                    <Avatar alt=""
                            src={props.currentChat.info.photo !== null && props.currentChat.info.photo}/>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader;