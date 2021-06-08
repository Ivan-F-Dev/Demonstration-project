import React, {useState} from 'react'
import s from './SetFields.module.scss';
import {useDispatch, useSelector} from "react-redux";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import {Button, makeStyles} from "@material-ui/core";
import {saveProfile} from "../../../store/thunkCreators";
import TextField from "@material-ui/core/TextField";

const SetFields = (props) => {

    const useStyles = makeStyles((theme) => ({
        rootBtn: {
            display: "flex",
            justifyContent: "center",
            marginTop: "10px"
        },
        root: {
            '& .MuiOutlinedInput-input': {
                padding: "2px"
            }
        }
    }));

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
                    <div><TextField value={fullName} onChange={e => setFullName(e.target.value)} className={classes.root}
                                     type="text" color="primary" id="outlined-basic"  variant="outlined"/></div>
                </div>
                <div className={s.item}>
                    <div>aboutMe:</div>
                    <div><TextField value={aboutMe} onChange={e => setAboutMe(e.target.value)} className={classes.root}
                                    type="text" color="primary" id="outlined-basic"  variant="outlined"/></div>
                </div>
                <div className={s.item}>
                    <div>lookingForAJob:</div>
                    <div><TextField value={lookingForAJob} onChange={e => setLookingForAJob(e.target.value)} className={classes.root}
                                    type="text" color="primary" id="outlined-basic"  variant="outlined"/></div>
                </div>
                <div className={s.item}>
                    <div>lookingForAJobDescription:</div>
                    <div><TextField value={lookingForAJobDescription} onChange={e => setLookingForAJobDescription(e.target.value)} className={classes.root}
                                    type="text" color="primary" id="outlined-basic"  variant="outlined"/></div>
                </div>
                <div style={{display: 'flex'}}>Contacts: {showContacts
                    ? <button className={s.btn} onClick={() => setShowContacts(false)}><ArrowDropDownIcon/></button>
                    : <button className={s.btn} onClick={() => setShowContacts(true)}><ArrowRightIcon/></button>}
                </div>
                {showContacts &&
                <div>
                    <div className={s.item}>
                        <div>facebook:</div>
                        <div><TextField value={facebook} onChange={e => setFacebook(e.target.value)} className={classes.root}
                                        type="text" color="primary" id="outlined-basic"  variant="outlined"/></div>
                    </div>
                    <div className={s.item}>
                        <div>website:</div>
                        <div><TextField value={website} onChange={e => setWebsite(e.target.value)} className={classes.root}
                                        type="text" color="primary" id="outlined-basic"  variant="outlined"/></div>
                    </div>
                    <div className={s.item}>
                        <div>vk:</div>
                        <div><TextField value={vk} onChange={e => setVk(e.target.value)} className={classes.root}
                                        type="text" color="primary" id="outlined-basic"  variant="outlined"/></div>
                    </div>
                    <div className={s.item}>
                        <div>twitter:</div>
                        <div><TextField value={twitter} onChange={e => setTwitter(e.target.value)} className={classes.root}
                                        type="text" color="primary" id="outlined-basic"  variant="outlined"/></div>
                    </div>
                    <div className={s.item}>
                        <div>instagram:</div>
                        <div><TextField value={instagram} onChange={e => setInstagram(e.target.value)} className={classes.root}
                                        type="text" color="primary" id="outlined-basic"  variant="outlined"/></div>
                    </div>
                    <div className={s.item}>
                        <div>youtube:</div>
                        <div><TextField value={youtube} onChange={e => setYoutube(e.target.value)} className={classes.root}
                                        type="text" color="primary" id="outlined-basic"  variant="outlined"/></div>
                    </div>
                    <div className={s.item}>
                        <div>github:</div>
                        <div><TextField value={github} onChange={e => setGithub(e.target.value)} className={classes.root}
                                        type="text" color="primary" id="outlined-basic"  variant="outlined"/></div>
                    </div>
                    <div className={s.item}>
                        <div>mainLink:</div>
                        <div><TextField value={mainLink} onChange={e => setMainLink(e.target.value)} className={classes.root}
                                        type="text" color="primary" id="outlined-basic"  variant="outlined"/></div>
                    </div>
                </div>}
                <Button onClick={() => dispatch(saveProfile(mainId, objPayload))} className={classes.rootBtn}
                        variant="contained" color="primary" fullWidth={true}>Set</Button>
            </div>
        </div>
    )
}

export default SetFields;