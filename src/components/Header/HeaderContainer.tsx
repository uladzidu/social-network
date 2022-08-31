import React from "react";
import {Header} from "./Header";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

export type mstpType = {
    isAuth: boolean
    login: string | null
    isFetching: boolean | null
}
export type mdtpType = {
    getAuthUserDataThunk: () => void
}

export type HeaderContainerType = mdtpType & mstpType

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.getAuthUserDataThunk()
    }

    render() {
        return <Header {...this.props} />
    }
}

export const mstp = (state: AppStateType): mstpType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        isFetching: state.auth.isFetching
    }
}
export const mdtp = (dispatch: Dispatch | any): mdtpType => {
    return {
        getAuthUserDataThunk: () => {
            dispatch(getAuthUserDataThunkCreator())
        }
    }
}

export default connect(mstp, mdtp)(HeaderContainer)