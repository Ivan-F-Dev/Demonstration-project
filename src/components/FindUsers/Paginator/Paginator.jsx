import React from 'react'
import s from './Paginator.module.scss';


const Paginator = () =>  (
        <div className={s.paginator}>
            <div>{'<<<'}</div>
            <div>Paginator</div>
            <div>{'>>>'}</div>
        </div>
)

export default Paginator;