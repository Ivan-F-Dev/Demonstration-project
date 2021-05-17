import {SET_TOTAL_NUMBER, SET_USERS} from "../actionTypes";

//INITIAL STATE FOR REDUCER
const initialState = {
    totalNumber: null,
    users: null
}
//REDUCER
export let findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_NUMBER:
            const totalNumber = action.payload
            return {
                ...state,
                totalNumber: totalNumber
            }
        case SET_USERS:
            const usersArr = action.payload
            return {
                ...state,
                users: usersArr
            }
        default :
            return state
    }
}


