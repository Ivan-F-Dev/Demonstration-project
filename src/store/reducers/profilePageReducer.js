import {ADD_POST, SET_PROFILE, SET_STATUS} from "../actionTypes";

//INITIAL STATE FOR REDUCER
const initialState = {
    mainProfile: {
        status: null,
        info: null,
    },
    visitedProfile: {
        status: null,
        info: null,
    },
    posts: []
}
//REDUCER
export let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPostText = action.payload
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    content: newPostText,
                    name: "AuthorName",
                    img: null
                }],
            }
        case SET_STATUS:
            const isVisitedProfileStatus = action.isVisitedProfileStatus
            const status = action.payload

            if (isVisitedProfileStatus) {
                return {
                    ...state, visitedProfile: {...state.visitedProfile, status: status}
                }
            } else {
                return {
                    ...state, mainProfile: {...state.mainProfile, status: status}
                }
            }

        case SET_PROFILE:
            const isVisitedProfileInfo = action.isVisitedProfileInfo
            const info = action.payload

            if (isVisitedProfileInfo) {
                if (info === null) {
                    return {
                        ...state,
                        visitedProfile: {...state.visitedProfile, status: null, info: null}
                    }
                } else {
                    return {
                        ...state,
                        visitedProfile: {...state.visitedProfile, info: info}
                    }
                }
            } else {
                if (info === null) {
                    return {
                        ...state,
                        mainProfile: {...state.mainProfile, status: null, info: null}
                    }
                } else {
                    return {
                        ...state,
                        mainProfile: {...state.mainProfile, info: info}
                    }
                }
            }

        default :
            return state
    }
}