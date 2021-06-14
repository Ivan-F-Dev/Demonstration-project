import React from 'react'
import s from './LoginPage.module.scss'
import {Button, makeStyles, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/thunkCreators";
import {Redirect} from "react-router-dom";
import Preloader from "../../MUI/Preloader/Preloader";
import {useInput} from "../../utils/validation";

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
    console.log('LoginPage was rendered')

    const classes = useStyles()

    const dispatch = useDispatch()
    const waiting = useSelector(state => state.authorization.waiting)

    let loginInput = useInput('', {isEmpty: true, minLength: 6, maxLength: 20, ownSpaces: true})
    let passwordInput = useInput('', {isEmpty: true, minLength: 4, maxLength: 20, ownSpaces: true})

    if (sessionStorage.authId) return <Redirect to={'/profile'}/>

    return (
        <div className={s.loginPage}>
            {waiting
                ? <Preloader/>
                : <div className={s.formWrap}>
                    <span>Если вы зашли просто посмотреть, то можно воспользоваться логином и паролем от тестового аккаунта.
                        Количество http запросов в день на тестовом аккаунте ограничено поэтому есть вероятность того, что он у вас не откроется(((
                    Если вы все-таки настроены решительно, то напишите мне на hh.ru  я дам вам доступ к своему аккаунту.</span>
                    <div>Логин: <b>free@samuraijs.com</b></div>
                    <div>Пароль: <b>free</b></div>
                    {(loginInput.isDirty && loginInput.minLengthError) && <div style={{color: 'red'}}>Недостаточно символов</div>}
                    {(loginInput.isDirty && loginInput.maxLengthError) && <div style={{color: 'red'}}>Слишком много символов</div>}
                    {(loginInput.isDirty && loginInput.isEmpty) && <div style={{color: 'red'}}>Поле не должно быть пустым</div>}
                    {(loginInput.isDirty && loginInput.spaces) && <div style={{color: 'red'}}>Присутствуют пробелы</div>}
                    <TextField onChange={(event) => loginInput.onChange(event)} value={loginInput.value}
                               fullWidth={true} onBlur={e => loginInput.onBlur(e)}
                               color={(loginInput.isDirty && loginInput.commonError)? "secondary" : "primary"} label="Write your username" variant="filled"/>

                    {(passwordInput.isDirty && passwordInput.minLengthError) && <div style={{color: 'red'}}>Недостаточно символов</div>}
                    {(passwordInput.isDirty && passwordInput.maxLengthError) && <div style={{color: 'red'}}>Слишком много символов</div>}
                    {(passwordInput.isDirty && passwordInput.isEmpty) && <div style={{color: 'red'}}>Поле не должно быть пустым</div>}
                    {(passwordInput.isDirty && passwordInput.spaces) && <div style={{color: 'red'}}>Присутствуют пробелы</div>}
                    <TextField onChange={(event) => passwordInput.onChange(event)} value={passwordInput.value}
                               fullWidth={true} type="password" onBlur={e => passwordInput.onBlur(e)}
                               color={(passwordInput.isDirty && passwordInput.commonError)? "secondary" : "primary"} label="Write your password" variant="filled" className={classes.root}/>
                    <Button onClick={() => dispatch(login(loginInput.value, passwordInput.value))} variant="contained"
                            className={classes.root} disabled={passwordInput.commonError || loginInput.commonError} color="primary" fullWidth={true}>Login</Button>
                </div>}
        </div>
    )
}

export default LoginPage