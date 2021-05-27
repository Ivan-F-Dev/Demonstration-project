import React, { useState } from 'react'
import s from './Test.module.scss';
import Button from '@material-ui/core/Button';
import { makeStyles, TextField } from "@material-ui/core";
import { API } from "../../api/api";

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

const Test = () => {
    const [state, setState] = useState('')

    const [nicknameInput, setNicknameInput] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [checkPasswordInput, setCheckPasswordInput] = useState('')

    const classes = useStyles()

    const signUp = async () => {
        await API.signUp(nicknameInput, nameInput, emailInput, passwordInput)
    }

    return (
        <div className={s.test}>
            Test
            <div>
                <Button onClick={() => setState(1)} color={state === 1 ? "primary" : "default"}>Тестовая кнопка1</Button>
                <Button onClick={() => setState(2)} color={state === 2 ? "primary" : "default"}>Тестовая кнопка2</Button>
                <Button onClick={() => setState(3)} color={state === 3 ? "primary" : "default"}>Тестовая кнопка3</Button>
                <Button onClick={() => setState(0)} color={state === 0 ? "primary" : "default"}>Обнуляющая кнопка</Button>
            </div>
            <div className={s.form}>
                <div className={s.formWrap}>
                    <TextField onChange={(event) => setNicknameInput(event.target.value)} value={nicknameInput}
                        fullWidth={true} color="primary" label="Write your nickname" variant="filled" />
                    <TextField onChange={(event) => setNameInput(event.target.value)} value={nameInput}
                        fullWidth={true} color="primary" label="Write your name" variant="filled" className={classes.root} />
                    <TextField onChange={(event) => setEmailInput(event.target.value)} value={emailInput}
                        fullWidth={true} color="primary" label="Write your email" variant="filled" className={classes.root} />
                    <TextField onChange={(event) => setPasswordInput(event.target.value)} value={passwordInput}
                        fullWidth={true} type={passwordInput && "password"} color="primary" label="Write your password" variant="filled" className={classes.root} />
                    <TextField onChange={(event) => setCheckPasswordInput(event.target.value)} value={checkPasswordInput} fullWidth={true} type={passwordInput && "password"}
                        color="primary" label="Write your password" variant="filled" className={classes.root} />
                    <Button variant="contained" className={classes.root} color="primary" fullWidth={true}
                        onClick={() => signUp()}>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default Test;