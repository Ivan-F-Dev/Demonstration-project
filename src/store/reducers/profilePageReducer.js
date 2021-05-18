import {ADD_POST, SET_PROFILE, SET_STATUS} from "../actionTypes";

//INITIAL STATE FOR REDUCER
const initialState = {
    status: null,
    profile: null,
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
            const status = action.payload
            return {
                ...state, status: status
            }
        case SET_PROFILE:
            const profile = action.payload
            if (profile === null) {
                return {
                    ...state,
                    profile: null
                }
            } else {
                return {
                    ...state,
                    profile: {...profile}
                }
            }
        default :
            return state
    }
}


