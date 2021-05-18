import React, {useEffect} from 'react'
import s from './Profile.module.scss';
import Posts from "./Posts/Posts.jsx";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {addProfile} from "../../store/thunkCreators";
import Preloader from "../../MUI/Preloader/Preloader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    const dispatch = useDispatch()
    const waiting = useSelector(state => state.authorization.waiting)
    const profile = useSelector(state => state.profilePage.profile)
    const status = useSelector(state => state.profilePage.status)

    let id = localStorage.authId
    console.log(props.match.params.userId)
    console.log('Profile was rendered')

    const reloadProfile = () => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = localStorage.authId
            if (!userId) {
                props.history.push("/login")
            }
        }
        dispatch(addProfile(userId))
    }

    useEffect( () => {
        if (id) dispatch(addProfile(id))
    }, [])

    if (!id) return <Redirect to={'/login'}/>

    return (
        <div>
            {waiting
                ? <Preloader/>
                : <div className={s.profile}>
                    <div className={s.leftColumn}>
                        <div className={s.leftColumnItem}>
                            <div className={s.avatarWrapper}>
                                <div className={s.avatar}>
                                    <img src={profile === null ? "https://www.sentara.com/Assets/Img/Common/Default/placeholder-doctor.svg?width=294" : profile.photos.large} alt="https://via.placeholder.com/600/92c952"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.rightColumn}>
                        <div className={s.rightColumnItem}>
                            <ProfileInfo profile={profile} status={status}/>
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