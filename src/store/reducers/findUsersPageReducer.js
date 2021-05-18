import {SET_FOLLOWED, SET_TOTAL_NUMBER, SET_USERS} from "../actionTypes";

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
        case SET_FOLLOWED:
            const follow = action.follow
            const userId = action.userId
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === userId) {
                        return {...user, followed: follow}
                    }
                    return user
                }),
            }
        default :
            return state
    }
}


