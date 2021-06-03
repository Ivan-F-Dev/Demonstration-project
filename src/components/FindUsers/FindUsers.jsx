import React from 'react'
import s from './FindUsers.module.scss';
import Paginator from "./Paginator/Paginator";
import ItemsContainer from "./ItemsContainer/ItemsContainer";
import {useDispatch, useSelector} from "react-redux";
import {addUsers} from "../../store/thunkCreators";
import Preloader from "../../MUI/Preloader/Preloader";
import {ArrowBackIos, ArrowForwardIos} from "@material-ui/icons";
import {Redirect} from "react-router-dom";


const FindUsers = (props) => {

    const dispatch = useDispatch()
    const usersState = useSelector(state => state.findUsersPage)
    const waiting = useSelector(state => state.authorization.waiting)

    let request = (count, page) => {
        dispatch(addUsers(count, page))
    }

    let mainId = sessionStorage.authId
    if (!mainId) return <Redirect to={'/login'}/>

    return (
        <div>
            <div className={s.findUsers}>
                <div>
                    <Paginator request={request} totalNumber={usersState.totalNumber}/>
                    {waiting ? <Preloader/> : <ItemsContainer friend={false} items={usersState.users}/>}
                </div>
                <div className={s.subPaginator}>
                    {/*<button onClick={ () => {
                        console.log(props.match.param)
                    }}><ArrowBackIos color="primary"/></button>
                    <div></div>
                    <button onClick={ () => {
                        console.log(props.match.param)
                    }}><ArrowForwardIos color="primary"/></button>*/}
                </div>
            </div>
        </div>
    )
}

export default FindUsers;