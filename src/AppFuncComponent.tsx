import React, { useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Musics";
import { Settings } from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "./hoc/WithRouter";
import { initializeAppTC } from "./redux/app-reducer";
import { AppStateType, useAppDispatch, useAppSelector } from "./redux/redux-store";
import { Preloader } from "./components/common/preloader/Preloader";
import { LoginWithFormik } from "./components/Login/LoginWithFormik";
import { authMeTC } from "./redux/auth-reducer";
import { HeaderFuncComponent } from "./components/Header/HeaderFuncComponent";

export const AppFuncComponent = () => {
    const isInitialized = useAppSelector((state) => state.auth.isAuth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(authMeTC());
    }, []);

    // if (!isInitialized) return <Preloader />;

    return (
        <div className="app-wrapper">
            {/*<HeaderContainer />*/}
            <HeaderFuncComponent />
            <Navbar />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/:userId" element={<ProfileContainer />} />
                    <Route path="/profile/" element={<ProfileContainer />} />
                    <Route path="/dialogs/*" element={<DialogsContainer />} />
                    <Route path="/users" element={<UsersContainer />} />
                    <Route path="/login" element={<LoginWithFormik />} />
                    <Route path="/news/" element={<News />} />
                    <Route path="/music/" element={<Music />} />
                    <Route path="/settings/" element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
};
