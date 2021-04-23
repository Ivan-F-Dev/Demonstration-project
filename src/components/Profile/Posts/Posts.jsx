import React from 'react'
import s from './Posts.module.scss';
import Post from "./Post/Post";
import TextField from '@material-ui/core/TextField';

const Posts = (props) => {

    let mapPosts = props.profileState.posts.map(el =>
        <Post img={el.img} name={el.name} content={el.content} key={el.id}/>
    )

    return (
        <div className={s.posts}>
            <div className={s.postsHeader}>
                <TextField fullWidth={true} color="primary" label="Write a new post" variant="filled"/>
                My posts
            </div>
            <div className={s.postsWrapper}>
                {mapPosts}
            </div>
        </div>
    )
}

export default Posts;