import React from 'react'
import s from './Header.module.scss';
import logo from './../../img/logo.svg';
import ava from './../../img/AvatarCat.jpg';
import SimpleMenu from "../../MUI/MIU SimpleMenu";
import Button from '@material-ui/core/Button';

const Header = () => (
    <div className={s.header}>
        <div className={s.leftHeaderPart}>
            <div className={s.logoWrapper}>
                <div className={s.logo}><img src={logo} alt=""/></div>
            </div>
            <div className={s.textWrapper}>
                <div className={s.text}>my react-redux spa</div>
            </div>
        </div>
        <div className={s.rightHeaderPart}>
            <div className={s.name}><Button>Ivan</Button></div>
            <div className={s.photoWrapper}><img src={ava} alt=""/></div>
            <div className={s.burger}><SimpleMenu/></div>
        </div>

    </div>
)


export default Header;