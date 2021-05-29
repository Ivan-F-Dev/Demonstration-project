// ACTION TYPES
import {
    ADD_POST,
    SET_FOLLOWED, SET_FOLLOWED_FRIEND, SET_FRIENDS,
    SET_IS_AUTH,
    SET_PROFILE, SET_STATUS,
    SET_TOTAL_NUMBER, SET_TOTAL_NUMBER_FRIENDS,
    SET_USERS,
    WAITING_OFF,
    WAITING_ON
} from "./actionTypes";

//ACTION CREATORS

//profilerReducer
export const addPost = (payload) => ({type: ADD_POST, payload});
export const setProfile = (payload, isVisitedProfileInfo = false) => ({type: SET_PROFILE, payload, isVisitedProfileInfo});
export const setStatus = (payload, isVisitedProfileStatus = false) => ({type: SET_STATUS, payload, isVisitedProfileStatus});

//authReducer
export const setIsAuth = (payload) => ({type: SET_IS_AUTH, payload})
export const waitingOn = () => ({type: WAITING_ON})
export const waitingOff = () => ({type: WAITING_OFF})

//findUsersReducer
export const setTotalNumber = (payload) => ({type: SET_TOTAL_NUMBER, payload})
export const setUsers = (payload) => ({type: SET_USERS, payload})
export const setTotalNumberFriends = (payload) => ({type: SET_TOTAL_NUMBER_FRIENDS, payload})
export const setFriends = (payload) => ({type: SET_FRIENDS, payload})
export const setFollowed = (userId, follow ) => ({type: SET_FOLLOWED, userId, follow})
export const setFollowedFriend = (userId, follow ) => ({type: SET_FOLLOWED_FRIEND, userId, follow})

