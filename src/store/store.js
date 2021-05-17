import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./reducers/profilePageReducer";
import thunk from "redux-thunk";
import {authReducer} from "./reducers/authReducer";
import {findUsersReducer} from "./reducers/findUsersPageReducer";

let reducers = combineReducers({
    authorization: authReducer,
    profilePage: profileReducer,
    findUsersPage: findUsersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)
));
window.__store__ = store;

