import React from 'react'
import s from './ChatHeader.module.scss';
import Avatar from "@material-ui/core/Avatar";

const ChatHeader = (props) => {
    return (
        <div className={s.chatHeader}>
            <div className={s.chatHeaderContent}>
                <div className={s.name}>{props.profile.info === null ? 'name' : props.profile.info.fullName}</div>
            </div>
            <div className={s.imgArea}>
                <div className={s.imgWrapper}>
                    <Avatar alt=""
                            src={props.profile.info !== null && props.profile.info.photos.large}/>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader;