import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./reducers/profilePageReducer";
import thunk from "redux-thunk";
import {authReducer} from "./reducers/authReducer";
import {findUsersReducer} from "./reducers/findUsersPageReducer";
import {messagesReducer} from "./reducers/messagesReducers";

let reducers = combineReducers({
    authorization: authReducer,
    profilePage: profileReducer,
    findUsersPage: findUsersReducer,
    messagePage: messagesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)
));
window.__store__ = store;

