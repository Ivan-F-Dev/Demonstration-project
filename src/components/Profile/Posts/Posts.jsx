import React from 'react'
import s from './Posts.module.scss';
import Post from "./Post/Post";
import AvatarCat from "./../../../img/AvatarCat.jpg"

const Posts = () => {
    return (
        <div className={s.posts}>
            <div className={s.postsHeader}>
                My posts
            </div>
            <div className={s.postsWrapper}>
                <Post img={AvatarCat} name='Ivan' content='Post Content'/>
                <Post img={AvatarCat} name='Ivan' content='Post Content'/>
                <Post img={AvatarCat} name='Ivan' content='Post Content'/>
            </div>
        </div>
    )
}


export default Posts;