import React, { useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Musics";
import { Settings } from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { useAppDispatch, useAppSelector } from "./redux/redux-store";
import { LoginWithFormik } from "./components/Login/LoginWithFormik";
import { authMeTC } from "./redux/auth-reducer";
import { HeaderFuncComponent } from "./components/Header/HeaderFuncComponent";
import { ProfileFuncComponent } from "./components/Profile/ProfileFuncComponent";
import { Friends } from "./components/Friends/Friends";
import { Preloader } from "./components/common/preloader/Preloader";
import { initializeAppTC, initializedSuccessAC } from "./redux/app-reducer";

export const AppFuncComponent = () => {
    const isInitialized = useAppSelector((state) => state.app.initialized);
    const dispatch = useAppDispatch();
    console.log(isInitialized);
    useEffect(() => {
        dispatch(initializeAppTC());
    }, []);

    if (!isInitialized) return <Preloader />;

    return (
        <div className="app-wrapper">
            <HeaderFuncComponent />
            <Navbar />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/:userId" element={<ProfileFuncComponent />} />
                    <Route path="/friends/" element={<Friends />} />
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
