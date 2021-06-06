import React, {useEffect, useState} from 'react'
import s from './Settings.module.scss';
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addProfile} from "../../store/thunkCreators";
import Preloader from "../../MUI/Preloader/Preloader";
import SetFields from "./SetFields/SetFields";

const Settings = (props) => {


    const mainId = sessionStorage.authId

    const dispatch = useDispatch()
    const waiting = useSelector(state => state.authorization.waiting)
    const profileInfo = useSelector(state => state.profilePage.mainProfile.info)

    let visitedId = props.match.params.userId
    console.log('Settings was rendered')

    useEffect(() => {
        let id = visitedId
        if (id) {
            dispatch(addProfile(id, true))
        } else {
            id = mainId
            if (id && profileInfo === null) dispatch(addProfile(id))
        }
    }, [])

    if (!mainId) return <Redirect to={'/login'}/>

    return (
        <div>
            {!waiting && profileInfo !== null
                ? <SetFields/>
                : <Preloader/>}
        </div>
    )
}

export default Settings;