import React from 'react'
import s from './Profile.module.scss';
import Posts from "./Posts/Posts.jsx";
import AvatarCat from "../../img/AvatarCat.jpg"
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const Profile = (props) => {

    const isAuth = useSelector(state => state.authorization.isAuth)


    if (isAuth === false) return <Redirect to={'/login'}/>

    return (
        <div className={s.profile}>
            <div className={s.leftColumn}>
                <div className={s.leftColumnItem}>
                    <div className={s.avatarWrapper}>
                        <div className={s.avatar}>
                            <img src={AvatarCat} alt="аватарка"/>
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