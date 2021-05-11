import React, {useEffect} from 'react'
import s from './Profile.module.scss';
import Posts from "./Posts/Posts.jsx";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {getProfile} from "../../store/thunkCreators";

const Profile = (props) => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.authorization.isAuth)
    const mainProfile = useSelector(state => state.authorization.mainProfile)
    const id = useSelector(state => state.authorization.id)

    useEffect(() => {
        if (isAuth === true)
            dispatch(getProfile(id))
    }, [])

    if (isAuth === false) return <Redirect to={'/login'}/>



    return (
        <div className={s.profile}>
            <div className={s.leftColumn}>
                <div className={s.leftColumnItem}>
                    <div className={s.avatarWrapper}>
                        <div className={s.avatar}>
                            <img src={mainProfile.photos.large} alt="https://via.placeholder.com/600/92c952"/>
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
    )


}

export default Profile;