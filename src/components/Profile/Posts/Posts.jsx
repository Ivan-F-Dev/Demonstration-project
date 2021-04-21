import React from 'react'
import s from './Posts.module.scss';
import Post from "./Post/Post";

const Posts = (props) => {

    let mapPosts = props.profileState.posts.map(el =>
        <Post img={el.img} name={el.name} content={el.content} key={el.id}/>
    )

    return (
        <div className={s.posts}>
            <div className={s.postsHeader}>
                My posts
            </div>
            <div className={s.postsWrapper}>
                {mapPosts}
            </div>
        </div>
    )
}

export default Posts;