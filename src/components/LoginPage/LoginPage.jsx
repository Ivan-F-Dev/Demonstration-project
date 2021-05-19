import React, {useState} from 'react'
import s from './LoginPage.module.scss'
import {Button, makeStyles, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/thunkCreators";
import {Redirect} from "react-router-dom";
import Preloader from "../../MUI/Preloader/Preloader";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,

        '& .MuiOutlinedInput-root': {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
        }
    },
}));

let LoginPage = (props) => {

    const dispatch = useDispatch()
    const waiting = useSelector(state => state.authorization.waiting)

    let [loginInput, setLoginInput] = useState('')
    let [passwordInput, setPasswordInput] = useState('')

    const classes = useStyles()

    console.log('LoginPage was rendered')

    if (localStorage.authId) return <Redirect to={'/profile'}/>

    return (
        <div className={s.loginPage}>
            {waiting
                ? <Preloader/>
                : <div className={s.formWrap}>
                    <TextField onChange={(event) => setLoginInput(event.target.value)} value={loginInput}
                               fullWidth={true}
                               color="primary" label="Write your username" variant="filled"/>
                    <TextField onChange={(event) => setPasswordInput(event.target.value)} value={passwordInput}
                               fullWidth={true} type="password"
                               color="primary" label="Write your password" variant="filled" className={classes.root}/>
                    <Button onClick={() => dispatch(login(loginInput, passwordInput))} variant="contained"
                            className={classes.root} color="primary" fullWidth={true}>Login</Button>
                </div>}
        </div>
    )

}

export default LoginPage