import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Button, TextField, makeStyles} from "@material-ui/core";
import s from './Posts.module.scss';
import Post from "./Post/Post";
import {addPost} from "../../../store/actionCreators";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
}));

const Posts = (props) => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.profilePage.posts)
    const classes = useStyles()

    let mapPosts = posts.map(el =>
        <Post img={el.img} name={el.name} content={el.content} key={el.id}/>
    )

    const [localState, setLocalState] = useState("")

    const callAddPost = () => {
        localState && dispatch(addPost(localState))
        setLocalState("")
    }

    return (
        <div className={s.posts}>
            <div className={s.postsHeader}>
                <TextField onChange={(event) => setLocalState(event.target.value)} value={localState} fullWidth={true}
                           color="primary" label="Write a new post" variant="filled"/>
                <Button onClick={callAddPost} variant="contained" className={classes.root} color="primary"
                        fullWidth={true}>Add post</Button>
            </div>
            <div className={s.postsWrapper}>
                {mapPosts}
            </div>
        </div>
    )
}

export default Posts;