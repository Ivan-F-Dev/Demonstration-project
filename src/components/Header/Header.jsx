import React from 'react'
import s from './Header.module.scss';
import logo from './../../img/logo.svg';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/thunkCreators";
import Avatar from "@material-ui/core/Avatar";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
    },
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
}));

const Header = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profilePage.mainProfile.info)
    const isAuth = useSelector(state => state.authorization.isAuth)


    console.log('Header was rendered')

    return <div className={s.header}>
        <div className={s.leftHeaderPart}>
            <div className={s.logoWrapper}>
                <div className={s.logo}>
                    <img src={logo} alt=""/>
                </div>
            </div>
            <div className={s.textWrapper}>
                <div className={s.text}>my react-redux spa</div>
            </div>
        </div>
        <div className={s.rightHeaderPart}>
            <div className={s.name}><NavLink className={s.link} to="/profile"><Button
                className={classes.root}>IVAN</Button></NavLink></div>
            <div className={s.photoWrapper}>
                <Avatar alt="" src={profile === null ? '' : profile.photos.large} className={classes.large}/>
            </div>
            <div className={s.name}>
                {isAuth ? <Button  onClick={() => {
                        dispatch(logout())
                        console.log("Header LOGOUT call logout")//debug
                    }}
                                  className={classes.root}>LOGOUT</Button> :
                    <NavLink className={s.link} to="/login"><Button className={classes.root}>LOGIN</Button></NavLink>}
            </div>
        </div>
    </div>
}

export default Header;