import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profilePageReducer";

let reducers = combineReducers({
    profilePage: profileReducer
})

export let store = createStore(reducers)

