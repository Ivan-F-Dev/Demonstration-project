import React from 'react'
import s from './Posts.module.scss';
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={s.posts}>
            <div className={s.postsHeader}>
                My posts
            </div>
            <div className={s.postsWrapper}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}


export default Posts;