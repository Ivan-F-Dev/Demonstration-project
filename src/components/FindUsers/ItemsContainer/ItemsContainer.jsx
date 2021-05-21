import React from 'react'
import s from './ItemsContainer.module.scss';
import UserItem from "./UserItem/UserItem";



const ItemsContainer = ({items, friend}) => {

    let itemsArr = items !== null ? items.map( (e) =>  <UserItem friend={friend} name={e.name} id={e.id} photo={e.photos.large} followed={e.followed} key={e.id}/>) : ''

    return(

        <div className={s.itemsContainer}>
            {itemsArr}
        </div>
    )
}

export default ItemsContainer;