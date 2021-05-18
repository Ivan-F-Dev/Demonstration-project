import React from 'react'
import s from './ProfileInfo.module.scss'


const ProfileInfo = ({profile, status}) => {

    return (
        <div className={s.profileInfo}>
            <div className={s.item}>
                <div>{!profile ? '...' : profile.fullName}</div>
                <div>{!status ? '...' : status}</div>
            </div>
            <div className={s.item}>
                <div>{!profile ? '...' : profile.userId}</div>
                <div>{!profile ? '...' : profile.lookingForAJob}</div>
                <div>{!profile ? '...' : profile.lookingForAJobDescription}</div>
            </div>
            <div className={s.item}>
                <div>Contacts:</div>
                <div>
                    <div>{!profile ? '...' : profile.contacts.github}</div>
                    <div>{!profile ? '...' : profile.contacts.vk}</div>
                    <div>{!profile ? '...' : profile.contacts.facebook}</div>
                    <div>{!profile ? '...' : profile.contacts.instagram}</div>
                    <div>{!profile ? '...' : profile.contacts.twitter}</div>
                    <div>{!profile ? '...' : profile.contacts.website}</div>
                    <div>{!profile ? '...' : profile.contacts.youtube}</div>
                    <div>{!profile ? '...' : profile.contacts.mainLink}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;