import React from 'react'
import s from './UserItem.module.scss';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const UserItem = () => {

    const classes = useStyles()

    return (
        <div className={s.userItem}>
            <div className={s.leftPart}>
                <div className={s.avaWrap}>
                    <Avatar alt="" src="" className={classes.large}/>
                </div>
                <div className={s.infoWrap}>
                    <div>Name</div>
                    <div>Id</div>
                </div>
            </div>
            <div className={s.rightPart}>
                <div className={s.btnWrap}>
                    <Button size="large" variant="contained" color="primary">Follow</Button>
                </div>
            </div>
        </div>
    )
}

export default UserItem;