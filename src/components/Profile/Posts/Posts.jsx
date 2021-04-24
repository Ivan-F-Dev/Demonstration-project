import React, {useState} from 'react'
import s from './Posts.module.scss';
import Post from "./Post/Post";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        borderTopLeftRadius:0,
        borderTopRightRadius:0
    },
}));

const Posts = (props) => {

    const classes = useStyles()

    let mapPosts = props.profileState.posts.map(el =>
        <Post img={el.img} name={el.name} content={el.content} key={el.id}/>
    )

    const [state, setState] = useState("")

    const callAddPost = () => {
        state && props.profileState.addPost(state)
        setState("")
    }

    return (
        <div className={s.posts}>
            <div className={s.postsHeader}>
                <TextField onChange={(event) => setState(event.target.value )}  value={state} fullWidth={true} color="primary" label="Write a new post" variant="filled"/>
                <Button onClick={callAddPost} variant="contained" className={classes.root} color="primary" fullWidth={true}>Add post</Button>
                My posts
            </div>
            <div className={s.postsWrapper}>
                {mapPosts}
            </div>
        </div>
    )
}

export default Posts;