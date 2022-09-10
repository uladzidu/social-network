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
}
export type mapDispatchToPropsType = {
    getUserProfileThunk: (userId: number) => void
    getUserStatusThunk : (userId: number) => void
    updateUserStatusThunk : (status : string) => void
}

type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileClassContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        // @ts-ignore
        let userId: number = this.props.router.params.userId
        if (!userId) userId = 25134;
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
        status : state.profilePage.status
    }
}
const mapDispatchToProps = (dispatch: Dispatch | any): mapDispatchToPropsType => {
    return {
        getUserProfileThunk: (userId: number) => {
            dispatch(getUserProfileThunkCreator(userId))
        },
        getUserStatusThunk: (userId: number) => {
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