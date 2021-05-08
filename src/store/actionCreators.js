// ACTION TYPES
import {ADD_POST, IS_AUTH, SET_USER_DATA, WAITING_OFF, WAITING_ON} from "./actionTypes";




//ACTION CREATORS

//profilerReducer
export const addPost = (payload) => ({type: ADD_POST, payload});

//authReducer
export const waitingOn = () => ({type: WAITING_ON})
export const waitingOff = () => ({type: WAITING_OFF})
export const setUserData = (id, login, email) => ({type: SET_USER_DATA, payload: {id, login, email}})
export const isAuth = (status) => ({type: IS_AUTH, status})
