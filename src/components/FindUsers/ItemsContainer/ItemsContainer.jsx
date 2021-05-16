import React from 'react'
import s from './ItemsContainer.module.scss';
import UserItem from "./UserItem/UserItem";


const ItemsContainer = () =>  (
        <div className={s.itemsContainer}>
            <UserItem/>
            <UserItem/>
            <UserItem/>
        </div>
)


export default ItemsContainer;