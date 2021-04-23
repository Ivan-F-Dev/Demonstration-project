import React from 'react'
import s from './Profile.module.scss';
import Posts from "./Posts/Posts.jsx";
import AvatarCat from "../../img/AvatarCat.jpg"


const profileState = {
    posts: [
        {name: "ivan1",
            img: {AvatarCat},
            content: "post1",
            id: 1},
        {name: "ivan2",
            img: {AvatarCat},
            content: "post2",
            id: 2},
        {name: "ivan3",
            img: {AvatarCat},
            content: "post3",
            id: 3},
        {name: "ivan4",
            img: {AvatarCat},
            content: "post4",
            id: 4},
        {name: "ivan1",
            img: {AvatarCat},
            content: "post1",
            id: 5},
        {name: "ivan2",
            img: {AvatarCat},
            content: "post2",
            id: 6},
        {name: "ivan3",
            img: {AvatarCat},
            content: "post3",
            id: 7},
        {name: "ivan4",
            img: {AvatarCat},
            content: "post4",
            id: 8}
    ]
}

const Profile = (props) => {
    return (
        <div className={s.profile}>

            <div className={s.leftColumn}>
                <div className={s.leftColumnItem}>
                    <div className={s.avatarWrapper}>
                        <div className={s.avatar}>
                            <img src={AvatarCat} alt="аватарка"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.rightColumn}>
                <div className={s.rightColumnItem}>
                    <div>Name</div>
                </div>
                <div className={s.rightColumnItem}>
                    <div>Status</div>
                </div>
                <div className={s.rightColumnItem}>
                    <div>Info</div>
                </div>
                <div className={s.rightColumnItem}>
                    <div>Photos</div>
                </div>
                <div className={s.rightColumnItem}>
                    <div>AddPostInput</div>
                </div>
                <div className={s.rightColumnItem}>
                    <Posts profileState={profileState}/>
                </div>
            </div>
        </div>
    )
}

export default Profile;