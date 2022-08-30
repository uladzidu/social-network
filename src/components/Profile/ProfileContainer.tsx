import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Profile, profileType} from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";

export type mapStateToPropsType = {
    profile: profileType
}
export type mapDispatchToPropsType = {
    setUserProfile: (profile: profileType) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export class ProfileClassContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        debugger
        // @ts-ignore
        let userId : number = this.props.router.params.userId
        if (!userId) userId = 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        setUserProfile: (profile: profileType) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileClassContainer)

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)