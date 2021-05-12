import React, {useEffect} from 'react'
import s from './Profile.module.scss';
import Posts from "./Posts/Posts.jsx";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {getProfile} from "../../store/thunkCreators";
import Preloader from "../../MUI/Preloader/Preloader";

const Profile = (props) => {

    const dispatch = useDispatch()
    const waiting = useSelector(state => state.authorization.waiting)
    const isAuth = useSelector(state => state.authorization.isAuth)
    const mainProfile = useSelector(state => state.authorization.mainProfile)
    const id = useSelector(state => state.authorization.id)

    useEffect( () => {
        if (isAuth === true && waiting === false) {
            dispatch(getProfile(id))
            console.log("Profile useEffect call getProfile")//debug
        } else {
            console.log("Profile useEffect alternative")}//debug
    }, [])

    if (isAuth === false) return <Redirect to={'/login'}/>

    return (
        <div>
            {waiting
                ? <Preloader/>
                : <div className={s.profile}>
                    <div className={s.leftColumn}>
                        <div className={s.leftColumnItem}>
                            <div className={s.avatarWrapper}>
                                <div className={s.avatar}>
                                    <img src={mainProfile !== null ? mainProfile.photos.large : "https://www.sentara.com/Assets/Img/Common/Default/placeholder-doctor.svg?width=294"} alt="https://via.placeholder.com/600/92c952"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.rightColumn}>
                        <div className={s.rightColumnItem}>
                            <div>Name</div>
                        </div>
                        <div className={s.rightColumnItem}>
                            <div>Status</div>
                        </div>
                        <div className={s.rightColumnItem}>
                            <div>Info</div>
                        </div>
                        <div className={s.rightColumnItem}>
                            <div>Photos</div>
                        </div>
                        <div className={s.rightColumnItem}>
                            <div>AddPostInput</div>
                        </div>
                        <div className={s.rightColumnItem}>
                            <Posts/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Profile;