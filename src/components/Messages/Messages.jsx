import React, {useState} from 'react'
import s from './Messages.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import AvatarCat from "../../img/AvatarCat.jpg";
import ChatHeader from "./ChatHeader/ChatHeader";
import {Redirect} from "react-router-dom";
import {Button, makeStyles, TextField} from "@material-ui/core";
import {addPost} from "../../store/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import MessageItem from "./MessageItem/MessageItem";

const messagesState = {
    messageItems: [
        {img: AvatarCat, name: "Ivan1", content: "blablablabla1", id: "1"},
        {img: AvatarCat, name: "Ivan2", content: "blablablabla2", id: "2"},
        {img: AvatarCat, name: "Ivan3", content: "blablablabla3", id: "3"},
        {img: AvatarCat, name: "Ivan4", content: "blablablabla4", id: "4"},
    ],
    chatHeader: {
        img: AvatarCat,
        name: "Ivan"
    }
}

const useStyles = makeStyles((theme) => ({
    rootButton: {
        display: "flex",
        justifyContent: "center",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
}));

let DialogItemsMap = messagesState.messageItems.map(el => <DialogItem img={el.img} name={el.name} content={el.content}
                                                                        key={el.id}/>)

const Messages = () => {

    const classes = useStyles()

    const [textFieldValue, setTextFieldValue] = useState('')
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profilePage.mainProfile)

    let mainId = sessionStorage.authId

    const callAddMessage = () => {
        textFieldValue && dispatch(addPost(textFieldValue))
        setTextFieldValue("")
    }

    if (!mainId) return <Redirect to={'/login'}/>

    return (
        <div className={s.messages}>
            <div className={s.availableChats}>
                {DialogItemsMap}
            </div>
            <div className={s.currentChat}>
                <div className={s.chatHeader}>

                    <ChatHeader profile={profile}/>
                </div>
                <div className={s.chatContent}>
                    Content
                    <MessageItem profile={profile}/>
                </div>
                <div className={s.chatInput}>
                    <TextField onChange={(event) => setTextFieldValue(event.target.value)} value={textFieldValue} fullWidth={true}
                                                        color="primary" label="Write a new message" variant="filled" InputProps={{
                        margin: 'dense',
                        style: {borderTopRightRadius: '0px', borderTopLeftRadius: '0px'}
                    }}/>
                    <Button onClick={callAddMessage} variant="contained" className={classes.rootButton} color="primary"
                            fullWidth={true}>Send message</Button>
                </div>
            </div>
        </div>
    )
}

export default Messages;