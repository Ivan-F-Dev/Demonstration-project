import {ADD_INFO, ADD_MESSAGE} from "../actionTypes";

//INITIAL STATE FOR REDUCER
const initialState = {
    currentChat: {
        messages: [],
        info: {
            photo: null,
            name: null
        }
    }
}
//REDUCER
export let messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const message = action.payload
            if (message === 'delete') {
                return {
                    ...state,
                    currentChat: {...state.currentChat, messages: state.currentChat.messages = []}
                }
            } else {
                return {
                    ...state,
                    currentChat: {...state.currentChat, messages: state.currentChat.messages.concat(message)}
                }
            }


        case ADD_INFO:
            const info = action.payload
            return {
                ...state,
                currentChat: {
                    ...state.currentChat,
                    info: {...state.currentChat.info, photo: info.photo, name: info.name}
                }
            }
        default :
            return state
    }
}