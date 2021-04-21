import React from 'react'
import s from './Messages.module.scss';
import MessageItem from "./MessageItem/MessageItem";
import AvatarCat from "../../img/AvatarCat.jpg";
import ChatHeader from "./ChatHeader/ChatHeader";


const Messages = () => (
    <div className={s.messages}>
        <div className={s.availableChats}>
            <MessageItem img={AvatarCat} name='Ivan1' content='blablablabla1'/>
            <MessageItem img={AvatarCat} name='Ivan2' content='blablablabla2'/>
            <MessageItem img={AvatarCat} name='Ivan3' content='blablablabla3'/>
            <MessageItem img={AvatarCat} name='Ivan4' content='blablablabla4'/>
            <MessageItem img={AvatarCat} name='Ivan5' content='blablablabla5'/>
            <MessageItem img={AvatarCat} name='Ivan6' content='blablablabla6'/>
        </div>
        <div className={s.currentChat}>
            <div className={s.chatHeader}>
                <ChatHeader img={AvatarCat} name='Ivan'/>
            </div>
            <div className={s.chatContent}>Content</div>
            <div className={s.chatInput}>Input</div>
        </div>
    </div>
)


export default Messages;