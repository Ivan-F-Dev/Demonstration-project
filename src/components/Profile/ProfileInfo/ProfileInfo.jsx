import React from 'react'
import s from './ProfileInfo.module.scss'


const ProfileInfo = ({currentProfile}) => {

    return (
        <div className={s.profileInfo}>
            <div className={s.item}>
                <div>{!currentProfile.info ? '...' : currentProfile.info.fullName}</div>
                <div>{!currentProfile.status ? '...' : currentProfile.status}</div>
            </div>
            <div className={s.item}>
                <div>{!currentProfile.info ? '...' : currentProfile.info.userId}</div>
                <div>{!currentProfile.info ? '...' : currentProfile.info.lookingForAJob}</div>
                <div>{!currentProfile.info ? '...' : currentProfile.info.lookingForAJobDescription}</div>
            </div>
            <div className={s.item}>
                <div>Contacts:</div>
                <div>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.github}</div>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.vk}</div>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.facebook}</div>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.instagram}</div>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.twitter}</div>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.website}</div>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.youtube}</div>
                    <div>{!currentProfile.info ? '...' : currentProfile.info.contacts.mainLink}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;