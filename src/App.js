import React from 'react'
import {Route} from "react-router-dom";
import s from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Test from "./components/Test/Test";
import Messages from "./components/Messages/Messages";
import Friends from "./components/Friends/Friends";
import FindUsers from "./components/FindUsers/FindUsers";
import Profile from "./components/Profile/Profile";
import LoginPage from "./components/LoginPage/LoginPage";

const App = () => (
    <div className={s.App}>
        <div className={s.headerWrapperTop}>
            <div className={s.headerWrapper}>
                <Header/>
            </div>
        </div>
        <div className={s.contentWrapperCentral}>
            <div className={s.navBarWrapper}>
                <Navbar/>
            </div>
            <div className={s.contentWrapper}>
                <Route path="/login" component={LoginPage}/>
                <Route path="/profile/:userId?" component={Profile}/>
                <Route path="/messages" component={Messages}/>
                <Route path="/friends" component={Friends}/>
                <Route path="/findUsers" component={FindUsers}/>
                <Route path="/test" component={Test}/>
            </div>
        </div>
    </div>
)

export default App;
