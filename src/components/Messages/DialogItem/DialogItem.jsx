import React, {useState} from 'react'
import s from './DialogItem.module.scss';
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core";

const DialogItem = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }));
    const classes = useStyles()

    return (
        <div onClick={() => {props.callAddInfo({photo: props.img, name: props.name})}} className={s.MessageItem} >
            <div className={s.imgArea}>
                <div className={s.imgWrapper}>
                    <Avatar sizes='large' alt="" className={classes.root}
                            src={props.img !== null && props.img}/>
                </div>
            </div>
            <div className={s.MessageItemContent}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.text}>
                    Id : {props.content}
                </div>
            </div>
        </div>
    )
}

export default DialogItem;