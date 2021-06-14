import React from 'react'
import preloader from '../../img/PreloaderS.svg'
import s from './PreloaderS.module.scss'

const PreloaderS = () => {
    return (
        <div className={s.wrap}>
            <img className={s.preloader} src={preloader} alt=""/>
        </div>
    )
}

export default PreloaderS