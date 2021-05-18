import React from 'react'
import s from './FindUsers.module.scss';
import Paginator from "./Paginator/Paginator";
import ItemsContainer from "./ItemsContainer/ItemsContainer";
import {useDispatch, useSelector} from "react-redux";
import {addUsers} from "../../store/thunkCreators";
import Preloader from "../../MUI/Preloader/Preloader";


const FindUsers = () => {

    const dispatch = useDispatch()
    const usersState = useSelector(state => state.findUsersPage)
    const waiting = useSelector(state => state.authorization.waiting)

    let request = () => {
        dispatch(addUsers(10, 1219))
    }

    return (
        <div>
            {waiting
                ? <Preloader/>
                :<div className={s.findUsers}>
                    <div>
                        <Paginator/>
                        <ItemsContainer usersState={usersState}/>
                        <button onClick={() => request()}>log</button>
                    </div>
                    <div className={s.subPaginator}>
                        <div>{'<<<'}</div>
                        <div>subPaginator</div>
                        <div>{'>>>'}</div>
                    </div>
                </div>}
        </div>
    )
}

export default FindUsers;