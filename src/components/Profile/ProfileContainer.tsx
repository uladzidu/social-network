import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Profile, profileType} from "./Profile";

export type mapStateToProps = {
    profile : profileType
}
export type mapDispatchToProps = {
    setUserProfile: (profile: profileType) => void
}

export type ProfileContainerPropsType = mapStateToProps & mapDispatchToProps

export class ProfileClassContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response: any) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} />
            // <Profile profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        setUserProfile: (profile: any) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileClassContainer)