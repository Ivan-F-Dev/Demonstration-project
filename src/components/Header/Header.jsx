import React from 'react'
import s from './Header.module.scss';
import logo from './../../img/logo.svg';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/thunkCreators";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
    },
}));

const Header = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.authorization.isAuth)


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
            <div className={s.name}><NavLink className={s.link} to="/profile"><Button className={classes.root}>IVAN</Button></NavLink></div>
            <div className={s.photoWrapper}>
                <img src="https://via.placeholder.com/600/92c952"  alt=""/>
            </div>
            <div className={s.name}><NavLink className={s.link} to="/login">
                {isAuth ? <Button onClick={() => dispatch(logout())} className={classes.root}>LOGOUT</Button> : <Button className={classes.root}>LOGIN</Button>}
            </NavLink></div>
        </div>
    </div>
}

export default Header;