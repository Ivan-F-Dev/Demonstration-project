import React from 'react'
import s from './Post.module.scss';
import AvatarCat from "./../../../../img/AvatarCat.jpg"

const Post = () => {
    return (
        <div className={s.post}>
            <div className={s.postHeader}>
                <div className={s.imgWrapper}>
                    <img src={AvatarCat} className={s.img}></img>
                </div>
            </div>
            <div className={s.postContent}>
                post content
            </div>


        </div>
    )
}


export default Post;