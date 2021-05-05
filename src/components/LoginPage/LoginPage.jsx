import React, { useState } from 'react'
import s from './LoginPage.module.scss'
import { Button, makeStyles, TextField } from "@material-ui/core";

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

    let [loginInput, setLoginInput] = useState('')
    let [passwordInput, setPasswordInput] = useState('')

    const classes = useStyles()

    return (
        <div>
            <div>
                <TextField onChange={(event) => setLoginInput(event.target.value)} value={loginInput} fullWidth={true}
                    color="primary" label="Write a new post" variant="filled" />
                <TextField onChange={(event) => setPasswordInput(event.target.value)} value={passwordInput} fullWidth={true}
                    className={classes.root} color="primary" label="Write a new post" variant="filled" />
                <Button variant="contained" className={classes.root} color="primary"
                    fullWidth={true}>Login</Button>
            </div>
        </div>
    )
}

export default LoginPage