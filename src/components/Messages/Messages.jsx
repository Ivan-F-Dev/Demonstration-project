import React, {useEffect, useState} from 'react'
import s from './Messages.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import ChatHeader from "./ChatHeader/ChatHeader";
import {Redirect} from "react-router-dom";
import {Button, makeStyles, TextField} from "@material-ui/core";
import {addInfo, addMessage} from "../../store/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import MessageItem from "./MessageItem/MessageItem";
import {addFriends, addProfile} from "../../store/thunkCreators";
import Preloader from "../../MUI/Preloader/Preloader";

const Messages = (props) => {

    const useStyles = makeStyles((theme) => ({
        rootButton: {
            display: "flex",
            justifyContent: "center",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
        },
    }));
    const classes = useStyles()

    let mainId = sessionStorage.authId
    const [showPreloader, setShowPreloader] = useState(false)
    const [textFieldValue, setTextFieldValue] = useState('')
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profilePage.mainProfile)
    const friends = useSelector(state => state.findUsersPage.friends)
    const currentChat = useSelector(state => state.messagePage.currentChat)

    useEffect(async () => {
        if (friends === null) {
            setShowPreloader(true)
            await dispatch(addFriends())
            setShowPreloader(false)
        }
    })

    const callAddInfo = (info) => {
        dispatch(addInfo(info))
        dispatch(addMessage('delete'))
    }

    const callAddMessage = () => {
        textFieldValue && dispatch(addMessage(textFieldValue))
        setTextFieldValue("")
    }

    const getDialogItemsMap = (friends) => {
        if (friends !== null) {
            return friends.map(el => <DialogItem callAddInfo={callAddInfo} img={el.photos.large} name={el.name}
                                                 content={el.id}
                                                 key={el.id}/>)
        } else {
            return null
        }
    }
    let DialogItemsMap = getDialogItemsMap(friends)

    const getMessageItemsMap = (currentChat) => {
        if (currentChat.messages.length !== 0) {
            return currentChat.messages.map(el => <MessageItem key={el.length + 100} content={el} profile={profile}/>)
        } else {
            return null
        }
    }
    let MessageItemsMap = getMessageItemsMap(currentChat)

    let visitedId = props.match.params.userId
    console.log('Settings was rendered')

    useEffect(() => {
        let id = visitedId
        if (id) {
            dispatch(addProfile(id, true))
        } else {
            id = mainId
            if (id && profile.info === null) dispatch(addProfile(id))
        }
    }, [])

    if (!mainId) return <Redirect to={'/login'}/>

    return (
        <div className={s.messages}>
            <div className={s.availableChats}>
                {showPreloader ? <Preloader/> : DialogItemsMap}
            </div>
            {currentChat.info.name &&
            <div className={s.currentChat}>
                <div className={s.chatHeader}>
                    <ChatHeader currentChat={currentChat}/>
                </div>
                <div className={s.chatContent}>
                    {MessageItemsMap}
                </div>
                <div className={s.chatInput}>
                    <TextField onChange={(event) => setTextFieldValue(event.target.value)} value={textFieldValue}
                               fullWidth={true}
                               color="primary" label="Write a new message" variant="filled" InputProps={{
                        margin: 'dense',
                        style: {borderTopRightRadius: '0px', borderTopLeftRadius: '0px'}
                    }}/>
                    <Button onClick={callAddMessage} variant="contained" className={classes.rootButton} color="primary"
                            fullWidth={true}>Send message</Button>
                </div>
            </div>}
        </div>
    )
}

export default Messages;