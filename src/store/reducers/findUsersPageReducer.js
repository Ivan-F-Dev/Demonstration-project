import {
    SET_FOLLOWED,
    SET_FOLLOWED_FRIEND,
    SET_FRIENDS,
    SET_TOTAL_NUMBER,
    SET_TOTAL_NUMBER_FRIENDS,
    SET_USERS
} from "../actionTypes";

//INITIAL STATE FOR REDUCER
const initialState = {
    totalNumber: null,
    users: null,
    totalNumberFriends: null,
    friends: null
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
        case SET_TOTAL_NUMBER_FRIENDS:
            const totalNumberFriends = action.payload
            return {
                ...state,
                totalNumberFriends: totalNumberFriends
            }
        case SET_FRIENDS:
            const friendsArr = action.payload
            return {
                ...state,
                friends: friendsArr
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
        case SET_FOLLOWED_FRIEND:
            const followFriend = action.follow
            const friendId = action.userId
            return {
                ...state,
                friends: state.friends.map(user => {
                    if (user.id === friendId) {
                        return {...user, followed: followFriend}
                    }
                    return user
                }),
            }
        default :
            return state
    }
}
