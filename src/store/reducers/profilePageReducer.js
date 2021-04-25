//PROPERTIES 'TYPE' FOR ACTIONS
const ADD_POST = "ADD_POST"
//INITIAL STATE FOR REDUCER
const initialState = {
    posts: [

    ]
}
//REDUCER
export let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPostText = action.newPostText
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1, content: newPostText, name: "AuthorName", img: null}],
            }
        default :
            return state
    }
}

//ACTION CREATORS
export const addPost = (newPostText) => ({type: ADD_POST, newPostText});









