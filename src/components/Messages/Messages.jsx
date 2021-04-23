import React from 'react'
import s from './Messages.module.scss';
import MessageItem from "./MessageItem/MessageItem";
import AvatarCat from "../../img/AvatarCat.jpg";
import ChatHeader from "./ChatHeader/ChatHeader";

const messagesState = {
    messageItems: [
        {img: AvatarCat,name: "Ivan1", content: "blablablabla1", id: "1"},
        {img: AvatarCat,name: "Ivan2", content: "blablablabla2", id: "2"},
        {img: AvatarCat,name: "Ivan3", content: "blablablabla3", id: "3"},
        {img: AvatarCat,name: "Ivan4", content: "blablablabla4", id: "4"},
        {img: AvatarCat,name: "Ivan5", content: "blablablabla5", id: "5"},
        {img: AvatarCat,name: "Ivan6", content: "blablablabla6", id: "6"},
    ],
    chatHeader: {
        img: AvatarCat,
        name: "Ivan"
    }
}

let messageItemsMap = messagesState.messageItems.map(el => <MessageItem img={el.img} name={el.name} content={el.content} key={el.id}/>)

const Messages = () => (
    <div className={s.messages}>
        <div className={s.availableChats}>
            {messageItemsMap}
        </div>
        <div className={s.currentChat}>
            <div className={s.chatHeader}>
                <ChatHeader img={messagesState.chatHeader.img} name={messagesState.chatHeader.name}/>
            </div>
            <div className={s.chatContent}>Content</div>
            <div className={s.chatInput}>Input</div>
        </div>
    </div>
)


export default Messages;