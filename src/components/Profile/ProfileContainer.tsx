import React from 'react';
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator,
} from "../../redux/profile-reducer";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Profile, profileType} from "./Profile";
import {withRouter} from "../../hoc/WithRouter";


export type mapStateToPropsType = {
    profile: profileType
    status : string | any
    userId : number | null
}
export type mapDispatchToPropsType = {
    getUserProfileThunk: (userId: number | null) => void
    getUserStatusThunk : (userId: number | null) => void
    updateUserStatusThunk : (status : string) => void
}

type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileClassContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        // @ts-ignore
        let userId: number | null = this.props.router.params.userId
        if (!userId) {
            userId = this.props.userId
        }
        this.props.getUserProfileThunk(userId)
        this.props.getUserStatusThunk(userId)

    }
    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status = {this.props.status}
                     updateStatus = {this.props.updateUserStatusThunk}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status : state.profilePage.status,
        userId : state.auth.userId
    }
}
const mapDispatchToProps = (dispatch: Dispatch | any): mapDispatchToPropsType => {
    return {
        getUserProfileThunk: (userId: number | null) => {
            dispatch(getUserProfileThunkCreator(userId))
        },
        getUserStatusThunk: (userId: number | null) => {
            dispatch(getUserStatusThunkCreator(userId))
        },
        updateUserStatusThunk: (status : string) => {
            dispatch(updateUserStatusThunkCreator(status))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    // WithAuthRedirect
)(ProfileClassContainer)