import {IS_AUTH, SET_MAIN_PROFILE, SET_USER_DATA, WAITING_OFF, WAITING_ON} from "../actionTypes";

//INITIAL STATE FOR REDUCER
const initialState = {
    id: null,
    login: null,
    email: null,
    waiting: false,
    isAuth: false,
    mainProfile: {}
}
//REDUCER
export let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case WAITING_ON:
            return {
                ...state, waiting: true
            }
        case WAITING_OFF:
            return {
                ...state, waiting: false
            }
        case IS_AUTH:
            return {
                ...state, isAuth: action.status
            }
        case SET_USER_DATA:
            return {
                ...state, ...action.payload
            }
        case SET_MAIN_PROFILE:
            return {
                ...state, mainProfile: { ...action.payload}
            }
        default :
            return state
    }
}

