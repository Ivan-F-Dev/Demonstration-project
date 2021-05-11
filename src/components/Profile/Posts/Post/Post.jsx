import React from 'react'
import s from './Post.module.scss';
import {useSelector} from "react-redux";

const Post = (props) => {

    const mainProfile = useSelector(state => state.authorization.mainProfile)

    return (
        <div className={s.post}>
            <div className={s.postHeader}>
                <div className={s.imgWrapper}>
                    {/*<img src={props.img} className={s.img} alt="Фото автора поста"/>*/}
                    <img src={mainProfile.photos.large} className={s.img} alt="Фото автора поста"/>
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