import {isAuth, setMainProfile, setUserData, waitingOff, waitingOn} from "./actionCreators";
import {API} from "../api/api";

export const getMe = () => async dispatch => {
    dispatch(waitingOn())
    let response = await API.getMe()
    if (response.resultCode === 0) {
        dispatch(setUserData(response.data.id, response.data.login, response.data.email))
        dispatch(isAuth(true))
        console.log("getMe is ok")
    } else {
        console.log("getMe is fail")
    }
    dispatch(waitingOff())
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    dispatch(waitingOn())
    let response = await API.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getMe())
        console.log("login is ok")
    } else {
        console.log("login is fail")
    }
    dispatch(waitingOff())
}

export const logout = () => async dispatch => {
    dispatch(waitingOn())
let response = await API.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null))
        dispatch(isAuth(false))
        console.log("logout is ok")
    } else {
        console.log("logout is fail")
    }
    dispatch(waitingOff())
}

export const getProfile = (id) => async dispatch => {
    dispatch(waitingOn())
    let response = await API.getProfile(id)
    if (response.status === 200) {
        dispatch(setMainProfile(response.data))
        console.log("getProfile is ok")
    } else {
        console.log("getProfile is fail")
    }
    dispatch(waitingOff())
}
