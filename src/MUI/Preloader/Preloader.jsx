import React from 'react'
import preloader from '../../img/Preloader.svg'
import s from './Preloader.module.scss'

const Preloader = () => {
    return (
        <div className={s.wrap}>
            <img className={s.preloader} src={preloader} alt=""/>
        </div>
    )
}

export default Preloader