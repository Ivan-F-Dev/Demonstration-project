import {
    setFollowed, setFollowedFriend, setFriends,
    setIsAuth,
    setProfile,
    setStatus,
    setTotalNumber, setTotalNumberFriends,
    setUsers,
    waitingOff,
    waitingOn
} from "./actionCreators";
import {API} from "../api/api";

export const getMe = () => async dispatch => {
    let response = await API.getMe()
    if (response.resultCode === 0) {
        sessionStorage.setItem('authId', response.data.id)
        sessionStorage.setItem('authLogin', response.data.login)
        sessionStorage.setItem('authEmail',  response.data.email)
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
        sessionStorage.removeItem('authLogin')
        sessionStorage.removeItem('authEmail')
        sessionStorage.removeItem('authId')
        console.log("thunkCreators logout is ok")
    } else {
        console.log("thunkCreators logout is fail")
    }
    dispatch(waitingOff())
}

export const addProfile = (id, isVisitedProfile) => async dispatch => {
    dispatch(waitingOn())
    let response = await API.getProfile(id)
    let status = await API.getStatus(id)
    if (response.status === 200 && status.status === 200) {
        dispatch(setProfile(response.data, isVisitedProfile))
        dispatch(setStatus(status.data, isVisitedProfile))
        dispatch(setIsAuth(true))
        console.log("thunkCreators addProfile is ok")
    } else {
        console.log("thunkCreators addProfile is fail")
    }
    dispatch(waitingOff())
}

export const saveProfile = (id, obj) => async dispatch => {
    dispatch(waitingOn())
    let save = await API.saveProfile(obj)
    let response = await API.getProfile(id)
    if (response.status === 200 && save.status === 200) {
        dispatch(setProfile(response.data))

        console.log("thunkCreators saveProfile is ok")
    } else {
        console.log("thunkCreators saveProfile is fail")
    }
    dispatch(waitingOff())
}

export const addUsers = (count, page) => async dispatch => {
    dispatch(waitingOn())
    let response = await API.getUsers(count, page)
    if (response.status === 200) {
        dispatch(setTotalNumber(response.data.totalCount))
        dispatch(setUsers(response.data.items))
        console.log("thunkCreators addUsers is ok")
    } else {
        console.log("thunkCreators addUsers is fail")
    }
    dispatch(waitingOff())
}
export const addFriends = (count, page, friend = true) => async dispatch => {
    dispatch(waitingOn())
    let response = await API.getUsers(count, page, friend)
    if (response.status === 200) {
        dispatch(setTotalNumberFriends(response.data.totalCount))
        dispatch(setFriends(response.data.items))
        console.log("thunkCreators addFriends is ok")
    } else {
        console.log("thunkCreators addFriends is fail")
    }
    dispatch(waitingOff())
}
export const sendFollow = (userId, isFriend = false) => async dispatch => {
    dispatch(waitingOn())
    let response = await API.follow(userId)
    if (response.status === 200) {
        isFriend ? dispatch(setFollowedFriend(userId, true)) : dispatch(setFollowed(userId, true))
        dispatch(setFollowed(userId, true))
        console.log("thunkCreators sendFollow is ok")
    } else {
        console.log("thunkCreators sendFollow is fail")
    }
    dispatch(waitingOff())
}

export const sendUnfollow = (userId, isFriend = false) => async dispatch => {
    dispatch(waitingOn())
    let response = await API.unfollow(userId)
    if (response.status === 200) {
        isFriend ? dispatch(setFollowedFriend(userId, false)) : dispatch(setFollowed(userId, false))
        console.log("thunkCreators sendUnfollow is ok")
    } else {
        console.log("thunkCreators sendUnfollow is fail")
    }
    dispatch(waitingOff())
}