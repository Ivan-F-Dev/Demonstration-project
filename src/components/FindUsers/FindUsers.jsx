import React from 'react'
import s from './FindUsers.module.scss';
import Paginator from "./Paginator/Paginator";
import ItemsContainer from "./ItemsContainer/ItemsContainer";


const FindUsers = () =>  (
        <div className={s.findUsers}>
            <div>
                <Paginator/>
                <ItemsContainer/>
            </div>
            <div className={s.subPaginator}>
                <div>{'<<<'}</div>
                <div>subPaginator</div>
                <div>{'>>>'}</div>
            </div>
        </div>
)

export default FindUsers;