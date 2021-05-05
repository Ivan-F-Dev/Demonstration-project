import React from 'react'
import s from './Header.module.scss';
import logo from './../../img/logo.svg';
import SimpleMenu from "../../MUI/MIU SimpleMenu";
import Button from '@material-ui/core/Button';
import {useStylesJustifyCenter} from "../../MUI/MIU Styles";

const Header = () => {
    const classes = useStylesJustifyCenter()

    return <div className={s.header}>
        <div className={s.leftHeaderPart}>
            <div className={s.logoWrapper}>
                <div className={s.logo}>
                    <img src={logo} alt=""/>
                </div>
            </div>
            <div className={s.textWrapper}>
                <div className={s.text}>my react-redux spa</div>
            </div>
        </div>
        <div className={s.rightHeaderPart}>
            <div className={s.name}><Button className={classes.root}>IVAN</Button></div>
            <div className={s.photoWrapper}>
                <img src="https://via.placeholder.com/600/92c952"  alt=""/>
            </div>
            <div className={s.burger}><SimpleMenu/></div>
        </div>

    </div>
}

export default Header;