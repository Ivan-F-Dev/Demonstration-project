import {ADD_POST} from "../actionTypes";

//INITIAL STATE FOR REDUCER
const initialState = {
    currentProfile: {},
    posts: [

    ]
}
//REDUCER
export let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPostText = action.payload
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1, content: newPostText, name: "AuthorName", img: null}],
            }
        default :
            return state
    }
}











