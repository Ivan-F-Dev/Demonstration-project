import React from 'react'
import s from './ItemsContainer.module.scss';
import UserItem from "./UserItem/UserItem";



const ItemsContainer = ({usersState}) => {

    let userItemsArr = usersState.users !== null ? usersState.users.map( (e) =>  <UserItem name={e.name} id={e.id} photo={e.photos.large} followed={e.followed} key={e.id}/>) : ''

    return(

        <div className={s.itemsContainer}>
            {userItemsArr}
        </div>
    )
}

export default ItemsContainer;