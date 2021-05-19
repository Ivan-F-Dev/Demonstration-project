import React from 'react'
import s from './Post.module.scss';
import {useSelector} from "react-redux";



const Post = (props) => {

    const profile = useSelector(state => state.profilePage.profile)

    return (
        <div className={s.post}>
            <div className={s.postHeader}>
                <div className={s.imgWrapper}>
                    <img src={profile !== null ? profile.photos.large : "https://www.sentara.com/Assets/Img/Common/Default/placeholder-doctor.svg?width=294"} className={s.img} alt="Фото автора поста"/>
                </div>
            </div>
            <div className={s.postContent}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.text}>
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default Post;