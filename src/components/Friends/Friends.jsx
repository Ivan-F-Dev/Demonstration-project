import React, {useEffect} from 'react'
import s from './Friends.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {addFriends, addProfile} from "../../store/thunkCreators";
import Paginator from "../FindUsers/Paginator/Paginator";
import Preloader from "../../MUI/Preloader/Preloader";
import ItemsContainer from "../FindUsers/ItemsContainer/ItemsContainer";
import {ArrowBackIos, ArrowForwardIos} from "@material-ui/icons";
import {Redirect} from "react-router-dom";

const Friends = (props) => {

    const dispatch = useDispatch()
    const usersState = useSelector(state => state.findUsersPage)
    const waiting = useSelector(state => state.authorization.waiting)

    let request = (count, page) => {
        dispatch(addFriends(count, page))
    }

    let mainId = sessionStorage.authId


    const profileInfo = useSelector(state => state.profilePage.mainProfile.info)

    let visitedId = props.match.params.userId
    console.log('Settings was rendered')

    useEffect(() => {
        let id = visitedId
        if (id) {
            dispatch(addProfile(id, true))
        } else {
            id = mainId
            if (id && profileInfo === null) dispatch(addProfile(id))
        }
    }, [])

    if (!mainId) return <Redirect to={'/login'}/>

    return (
        <div>
            <div className={s.friends}>
                <div>
                    <Paginator request={request} totalNumber={usersState.totalNumberFriends}/>
                    {waiting ? <Preloader/> : <ItemsContainer friend={true} items={usersState.friends}/>}
                </div>
                <div className={s.subPaginator}>
                    {/*<button><ArrowBackIos color="primary"/></button>
                    <div></div>
                    <button><ArrowForwardIos color="primary"/></button>*/}
                </div>
            </div>
        </div>
    )
}

export default Friends;