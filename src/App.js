import React from 'react'
import s from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Test from "./components/Test/Test";
import {BrowserRouter, Route,} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import Friends from "./components/Friends/Friends";
import FindUsers from "./components/FindUsers/FindUsers";
import {theme} from "./MUI/MIU Styles";
import {MuiThemeProvider} from "@material-ui/core";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {ProfileContainer} from "./components/Profile/ProfileContainer";

const App = () => (
    <BrowserRouter>
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
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
                            <Route path="/profile" component={ProfileContainer}/>
                            <Route path="/messages" component={Messages}/>
                            <Route path="/friends" component={Friends}/>
                            <Route path="/findUsers" component={FindUsers}/>
                            <Route path="/test" component={Test}/>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        </Provider>
    </BrowserRouter>
)

export default App;
