// ACTION TYPES
import {ADD_POST, SET_IS_AUTH, SET_PROFILE, SET_TOTAL_NUMBER, SET_USERS, WAITING_OFF, WAITING_ON} from "./actionTypes";

//ACTION CREATORS

//profilerReducer
export const addPost = (payload) => ({type: ADD_POST, payload});
export const setProfile = (payload) => ({type: SET_PROFILE, payload});

//authReducer
export const setIsAuth = (payload) => ({type: SET_IS_AUTH, payload})
export const waitingOn = () => ({type: WAITING_ON})
export const waitingOff = () => ({type: WAITING_OFF})

//findUsersReducer
export const setTotalNumber = (payload) => ({type: SET_TOTAL_NUMBER, payload})
export const setUsers = (payload) => ({type: SET_USERS, payload})
