import {setIsAuth, setProfile, setTotalNumber, setUsers, waitingOff, waitingOn} from "./actionCreators";
import {API} from "../api/api";

export const getMe = () => async dispatch => {
    let response = await API.getMe()
    if (response.resultCode === 0) {
        localStorage.setItem('authId', response.data.id)
        localStorage.setItem('authLogin', response.data.login)
        localStorage.setItem('authEmail',  response.data.email)
        dispatch(setIsAuth(true))
        console.log("thunkCreators getMe is ok")
    } else {
        console.log("thunkCreators getMe is fail")
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    dispatch(waitingOn())
    let response = await API.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        await dispatch(getMe())
        console.log("thunkCreators login is ok")
    } else {
        console.log("thunkCreators login is fail")
    }
    dispatch(waitingOff())
}

export const logout = () => async dispatch => {
    dispatch(waitingOn())
let response = await API.logout()
    if (response.data.resultCode === 0) {
        dispatch(setProfile(null))
        dispatch(setIsAuth(false))
        localStorage.removeItem('authLogin')
        localStorage.removeItem('authEmail')
        localStorage.removeItem('authId')
        console.log("thunkCreators logout is ok")
    } else {
        console.log("thunkCreators logout is fail")
    }
    dispatch(waitingOff())
}

export const addProfile = (id) => async dispatch => {
    dispatch(waitingOn())
    let response = await API.getProfile(id)
    if (response.status === 200) {
        dispatch(setProfile(response.data))
        dispatch(setIsAuth(true))
        console.log("thunkCreators addProfile is ok")
    } else {
        console.log("thunkCreators addProfile is fail")
    }
    dispatch(waitingOff())
}

export const addUsers = (count, page) => async dispatch => {
    dispatch(waitingOn())
    let response = await API.getUsers(count, page)
    console.log(response)
    if (response.status === 200) {
        dispatch(setTotalNumber(response.data.totalCount))
        dispatch(setUsers(response.data.items))
        console.log("thunkCreators addUsers is ok")
    } else {
        console.log("thunkCreators addUsers is fail")
    }
    dispatch(waitingOff())
}
