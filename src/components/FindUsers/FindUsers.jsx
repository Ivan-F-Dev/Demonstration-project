import React from 'react'
import s from './FindUsers.module.scss';
import Paginator from "./Paginator/Paginator";
import ItemsContainer from "./ItemsContainer/ItemsContainer";
import {useDispatch, useSelector} from "react-redux";
import {addUsers} from "../../store/thunkCreators";
import Preloader from "../../MUI/Preloader/Preloader";
import {ArrowBackIos, ArrowForwardIos} from "@material-ui/icons";


const FindUsers = () => {

    const dispatch = useDispatch()
    const usersState = useSelector(state => state.findUsersPage)
    const waiting = useSelector(state => state.authorization.waiting)

    let request = (count, page) => {
        dispatch(addUsers(count, page))
    }

    return (
        <div>
            <div className={s.findUsers}>
                <div>
                    <Paginator request={request} usersState={usersState}/>
                    {waiting ? <Preloader/> : <ItemsContainer usersState={usersState}/>}
                </div>
                <div className={s.subPaginator}>
                    <button><ArrowBackIos color="primary"/></button>
                    <div></div>
                    <button><ArrowForwardIos color="primary"/></button>
                </div>
            </div>
        </div>
    )
}

export default FindUsers;