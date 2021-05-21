import React from 'react'
import s from './UserItem.module.scss';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {sendFollow, sendUnfollow} from "../../../../store/thunkCreators";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const UserItem = ({name, id, photo, followed, friend}) => {

    const dispatch = useDispatch()

    const classes = useStyles()

    return (
        <div className={s.userItem}>
            <div className={s.leftPart}>
                <div className={s.avaWrap}>
                    <NavLink to={'/profile/' + id}>
                        <Avatar alt="" src={photo} className={classes.large}/>
                    </NavLink>
                </div>
                <div className={s.infoWrap}>
                    <div>{name}</div>
                    <div>{id}</div>
                </div>
            </div>
            <div className={s.rightPart}>
                <div className={s.btnWrap}>
                    {followed
                        ? <Button onClick={() => dispatch(sendUnfollow(id, friend))} size="large"
                                  variant="contained">Unfollow</Button>
                        : <Button onClick={() => dispatch(sendFollow(id, friend))} size="large" variant="contained"
                                  color="primary">Follow</Button>}
                </div>
            </div>
        </div>
    )
}
export default UserItem;