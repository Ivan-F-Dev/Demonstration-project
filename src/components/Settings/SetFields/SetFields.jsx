import React, {useState} from 'react'
import s from './SetFields.module.scss';
import {useDispatch, useSelector} from "react-redux";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import {Button, makeStyles} from "@material-ui/core";
import {saveProfile} from "../../../store/thunkCreators";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: "10px"
    },
}));

const SetFields = (props) => {

    const classes = useStyles()

    const mainId = sessionStorage.authId

    const dispatch = useDispatch()
    const profileInfo = useSelector(state => state.profilePage.mainProfile.info)
    let [showContacts, setShowContacts] = useState(false)

    /*const [fullName, setFullName] = useState(profileInfo === null ? 'need auth' : profileInfo.fullName)*/
    const [fullName, setFullName] = useState(profileInfo.fullName)
    const [aboutMe, setAboutMe] = useState(profileInfo.aboutMe)
    const [lookingForAJob, setLookingForAJob] = useState(profileInfo.lookingForAJob)
    const [lookingForAJobDescription, setLookingForAJobDescription] = useState(profileInfo.lookingForAJobDescription)
    const [facebook, setFacebook] = useState(profileInfo.contacts.facebook)
    const [website, setWebsite] = useState(profileInfo.contacts.website)
    const [vk, setVk] = useState(profileInfo.contacts.vk)
    const [twitter, setTwitter] = useState(profileInfo.contacts.twitter)
    const [instagram, setInstagram] = useState(profileInfo.contacts.instagram)
    const [youtube, setYoutube] = useState(profileInfo.contacts.youtube)
    const [github, setGithub] = useState(profileInfo.contacts.github)
    const [mainLink, setMainLink] = useState(profileInfo.contacts.mainLink)

    const objPayload = {
        "aboutMe": profileInfo === null ? 'need auth' : profileInfo.aboutMe,
        "userId": profileInfo === null ? 'need auth' : profileInfo.userId,
        "lookingForAJob": lookingForAJob,
        "lookingForAJobDescription": lookingForAJobDescription,
        "fullName": fullName,
        "contacts": {
            "facebook": facebook,
            "website": website,
            "vk": vk,
            "twitter": twitter,
            "instagram": instagram,
            "youtube": youtube,
            "github": github,
            "mainLink": mainLink
        }
    }

    return (
        <div className={s.settings}>
            <div className={s.dataOther}>
                <div className={s.item}>
                    <div>fullName:</div>
                    <div><input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text"/></div>
                </div>
                <div className={s.item}>
                    <div>aboutMe:</div>
                    <div><input value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} type="text"/></div>
                </div>
                <div className={s.item}>
                    <div>lookingForAJob:</div>
                    <div><input value={lookingForAJob} onChange={(e) => setLookingForAJob(e.target.value)} type="text"/>
                    </div>
                </div>
                <div className={s.item}>
                    <div>lookingForAJobDescription:</div>
                    <div><input value={lookingForAJobDescription}
                                onChange={(e) => setLookingForAJobDescription(e.target.value)} type="text"/></div>
                </div>
                <div style={{display: 'flex'}}>Contacts: {showContacts
                    ? <button className={s.btn} onClick={() => setShowContacts(false)}><ArrowDropDownIcon/></button>
                    : <button className={s.btn} onClick={() => setShowContacts(true)}><ArrowRightIcon/></button>}
                </div>
                {showContacts &&
                <div>
                    <div className={s.item}>
                        <div>facebook:</div>
                        <div><input value={facebook} onChange={(e) => setFacebook(e.target.value)} type="text"/></div>
                    </div>
                    <div className={s.item}>
                        <div>website:</div>
                        <div><input value={website} onChange={(e) => setWebsite(e.target.value)} type="text"/></div>
                    </div>
                    <div className={s.item}>
                        <div>vk:</div>
                        <div><input value={vk} onChange={(e) => setVk(e.target.value)} type="text"/></div>
                    </div>
                    <div className={s.item}>
                        <div>twitter:</div>
                        <div><input value={twitter} onChange={(e) => setTwitter(e.target.value)} type="text"/></div>
                    </div>
                    <div className={s.item}>
                        <div>instagram:</div>
                        <div><input value={instagram} onChange={(e) => setInstagram(e.target.value)} type="text"/></div>
                    </div>
                    <div className={s.item}>
                        <div>youtube:</div>
                        <div><input value={youtube} onChange={(e) => setYoutube(e.target.value)} type="text"/></div>
                    </div>
                    <div className={s.item}>
                        <div>github:</div>
                        <div><input value={github} onChange={(e) => setGithub(e.target.value)} type="text"/></div>
                    </div>
                    <div className={s.item}>
                        <div>mainLink:</div>
                        <div><input value={mainLink} onChange={(e) => setMainLink(e.target.value)} type="text"/></div>
                    </div>
                </div>}
                <Button onClick={() => dispatch(saveProfile(mainId, objPayload))} className={classes.root}
                        variant="contained" color="primary" fullWidth={true}>Set</Button>
            </div>
        </div>
    )
}

export default SetFields;