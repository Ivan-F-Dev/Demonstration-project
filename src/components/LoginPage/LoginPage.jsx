import React, { useState } from 'react'
import s from './LoginPage.module.scss'
import { Button, makeStyles, TextField } from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/thunkCreators";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,

        '& .MuiFilledInput-root': {
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

    return (
        <div className={s.loginPage}>
            {waiting && <span>123456789</span>}
            <div className={s.formWrap}>
                <TextField onChange={(event) => setLoginInput(event.target.value)} value={loginInput} fullWidth={true}
                           color="primary" label="Write your username" variant="filled" />
                <TextField onChange={(event) => setPasswordInput(event.target.value)} value={passwordInput} fullWidth={true}
                           color="primary" label="Write your password" variant="filled" className={classes.root} />
                <Button onClick={() => dispatch(login(loginInput, passwordInput))} variant="contained" className={classes.root} color="primary" fullWidth={true}>Login</Button>
            </div>
        </div>
    )
}

export default LoginPage