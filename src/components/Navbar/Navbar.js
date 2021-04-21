import React, {useState} from 'react'
import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {useStylesNavBar} from "../../MUI/MIU Styles";

const Navbar = () => {

    const [linkState, setLinkState] = useState(1)

    const classes = useStylesNavBar()

    return (

        <div className={s.navBar}>
            <div>
                <NavLink className={s.link} to="/profile">
                    <Button onClick={() => setLinkState(1)} className={linkState === 1 ? classes.rootActive : classes.root}>Profile</Button>
                </NavLink>
            </div>
            <div>
                <NavLink className={s.link} to="/messages">
                    <Button onClick={() => setLinkState(2)} className={linkState === 2 ? classes.rootActive : classes.root}>Messages</Button>
                </NavLink>
            </div>
            <div>
                <NavLink className={s.link} to="/friends">
                    <Button onClick={() => setLinkState(3)} className={linkState === 3 ? classes.rootActive : classes.root}>Friends</Button>
                </NavLink>
            </div>
            <div>
                <NavLink className={s.link} to="/findUsers">
                    <Button onClick={() => setLinkState(4)} className={linkState === 4 ? classes.rootActive : classes.root}>Find Users</Button>
                </NavLink>
            </div>
            <div>
                <NavLink className={s.link} to="/test">
                    <Button onClick={() => setLinkState(5)} className={linkState === 5 ? classes.rootActive : classes.root}>Test</Button>
                </NavLink>
            </div>
        </div>
    )
}


export default Navbar;