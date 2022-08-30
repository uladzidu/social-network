import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {changeIsFetchingAC, setAuthUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

export type mstpType = {
    isAuth: boolean
    login: string | null
    isFetching: boolean | null
}
export type mdtpType = {
    setUserData: (id: number | null, email: string
        | null, login: string | null) => void
    changeIsFetching : (value: boolean | null) => void
}

export type HeaderContainerType = mdtpType & mstpType

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.changeIsFetching(true)
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {withCredentials: true}
        )
            .then((response: any) => {
                this.props.changeIsFetching(false)
                    if (response.data.resultCode === 0) {
                        const {id, email, login} = response.data.data
                        this.props.setUserData(id, email, login)
                    }
                }
            )
    }

    render() {
        debugger
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
export const mdtp = (dispatch: Dispatch): mdtpType => {
    return {
        setUserData: (id: number | null, email: string | null, login: string | null) => {
            dispatch(setAuthUserDataAC(id, email, login))
        },
        changeIsFetching : (value: boolean | null) => {
            dispatch(changeIsFetchingAC(value))
        }
    }
}

export default connect(mstp, mdtp)(HeaderContainer)