import React, {useState} from 'react'
import s from './ProfileInfo.module.scss'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {useDispatch} from "react-redux";
import {saveStatus} from "../../../store/thunkCreators";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";

const ProfileInfo = ({currentProfile}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiOutlinedInput-input': {
                padding: "2px"
            }
        }
    }));
    const classes = useStyles()

    let mainId = sessionStorage.authId
    let dispatch = useDispatch()

    let [showContacts, setShowContacts] = useState(false)
    let [editStatus, setEditStatus] = useState(false)
    let [inputValue, setInputValue] = useState(currentProfile.status)

    const onBlur = () => {
        dispatch(saveStatus(mainId, inputValue))
        setEditStatus(false)
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.item}>
                <div>{!currentProfile.info ? '...' : currentProfile.info.fullName}</div>
                {!editStatus
                    ? <div onDoubleClick={() => setEditStatus(true)} style={{
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginLeft: '3px'
                    }}>{!currentProfile.status ? '...' : currentProfile.status}</div>
                    : <TextField onBlur={() => onBlur()} value={inputValue} onChange={e => setInputValue(e.target.value)} className={classes.root}
                                 fullWidth={true} type="text" color="primary" id="outlined-basic"  variant="outlined"/>}
            </div>
            <div className={s.item}>
                <div>{!currentProfile.info ? '...' : currentProfile.info.userId}</div>
                <div>{!currentProfile.info ? '...' : currentProfile.info.lookingForAJob}</div>
                <div>{!currentProfile.info ? '...' : currentProfile.info.lookingForAJobDescription}</div>
            </div>
            <div className={s.item}>
                <div style={{display: 'flex'}}>Contacts: {showContacts
                    ? <button onClick={() => setShowContacts(false)}><ArrowDropDownIcon/></button>
                    : <button onClick={() => setShowContacts(true)}><ArrowRightIcon/></button>}
                </div>
                <div style={showContacts ? {display: 'block'} : {display: 'none'}}>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.github}</div>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.vk}</div>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.facebook}</div>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.instagram}</div>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.twitter}</div>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.website}</div>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.youtube}</div>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.mainLink}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;