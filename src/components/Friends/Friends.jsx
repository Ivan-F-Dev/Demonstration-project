import React from 'react'
import s from './Friends.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {addFriends} from "../../store/thunkCreators";
import Paginator from "../FindUsers/Paginator/Paginator";
import Preloader from "../../MUI/Preloader/Preloader";
import ItemsContainer from "../FindUsers/ItemsContainer/ItemsContainer";
import {ArrowBackIos, ArrowForwardIos} from "@material-ui/icons";

const Friends = (props) => {

    const dispatch = useDispatch()
    const usersState = useSelector(state => state.findUsersPage)
    const waiting = useSelector(state => state.authorization.waiting)

    let request = (count, page) => {
        dispatch(addFriends(count, page))
    }

    return (
        <div>
            <div className={s.friends}>
                <div>
                    <Paginator request={request} totalNumber={usersState.totalNumberFriends}/>
                    {waiting ? <Preloader/> : <ItemsContainer friend={true} items={usersState.friends}/>}
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

export default Friends;