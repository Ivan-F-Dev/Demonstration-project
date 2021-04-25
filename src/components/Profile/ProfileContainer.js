import Profile from "./Profile";
import {addPost} from "../../store/reducers/profilePageReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profileState: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPost(newPostText))
        }
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)