import React from 'react'
import s from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.postHeader}>
                <div className={s.imgWrapper}>
                    <img src={props.img} className={s.img} alt="Фото автора поста"/>
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