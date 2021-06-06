import React from 'react'
import s from './MessageItem.module.scss';
import Avatar from "@material-ui/core/Avatar";


const MessageItem = (props) => {


    return (
        <div className={s.messageItem}>
            <div className={s.messageHeader}>
                <div className={s.imgWrapper}>
                    <Avatar alt=""
                            src={props.profile.info !== null && props.profile.info.photos.large}/>
                </div>
            </div>
            <div className={s.messageContent}>
                <div className={s.name}>
                    {props.profile.info === null ? 'name' : props.profile.info.fullName}
                </div>
                <div className={s.text}>
                    content
                </div>
            </div>
        </div>
    )
}

export default MessageItem;