import React from 'react';
import {connect} from "react-redux";
import {getUserProfileThunkCreator} from "../../redux/profile-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Profile, profileType} from "./Profile";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";

export type mapStateToPropsType = {
    profile: profileType
    isAuth : boolean
}
export type mapDispatchToPropsType = {
    getUserProfileThunk : (userId : number) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export class ProfileClassContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        // @ts-ignore
        let userId : number = this.props.router.params.userId
        if (!userId) userId = 2
        this.props.getUserProfileThunk(userId)
    }

    render() {

        if (!this.props.isAuth) return <Navigate to={'/login'}/>

        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth : state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch | any): mapDispatchToPropsType => {
    return {
        getUserProfileThunk : (userId : number) => {
            dispatch(getUserProfileThunkCreator(userId))
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