import React from "react";
import { Header } from "./Header";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { authMeTC } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { logoutTC } from "../../redux/login-reducer";

export type mstpType = {
    isAuth: boolean;
    login: string | null;
    isFetching: boolean | null;
};
export type mdtpType = {
    // getAuthUserDataThunk: () => void
    logoutThunk: () => void;
};

export type HeaderContainerType = mdtpType & mstpType;

class HeaderContainer extends React.Component<HeaderContainerType> {
    render() {
        return <Header {...this.props} />;
    }
}

export const mstp = (state: AppStateType): mstpType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        isFetching: state.auth.isLoading,
    };
};
export const mdtp = (dispatch: Dispatch | any): mdtpType => {
    return {
        // getAuthUserDataThunk: () => {
        //     dispatch(getAuthUserDataThunkCreator())
        // },
        logoutThunk: () => {
            dispatch(logoutTC());
        },
    };
};

export default connect(mstp, mdtp)(HeaderContainer);
