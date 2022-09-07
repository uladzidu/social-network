import React from 'react';
import {connect} from "react-redux";
import {getUserProfileThunkCreator} from "../../redux/profile-reducer";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Profile, profileType} from "./Profile";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {withRouter} from "../../hoc/WithRouter";



export type mapStateToPropsType = {
    profile: profileType
}
export type mapDispatchToPropsType = {
    getUserProfileThunk: (userId: number) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileClassContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        // @ts-ignore
        let userId: number = this.props.router.params.userId
        if (!userId) userId = 2;
        this.props.getUserProfileThunk(userId)
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}
const mapDispatchToProps = (dispatch: Dispatch | any): mapDispatchToPropsType => {
    return {
        getUserProfileThunk: (userId: number) => {
            dispatch(getUserProfileThunkCreator(userId))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(ProfileClassContainer)