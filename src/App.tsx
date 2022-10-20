import React from "react";
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
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "./hoc/WithRouter";
import { initializeAppTC } from "./redux/app-reducer";
import { AppStateType } from "./redux/redux-store";
import { Preloader } from "./components/common/preloader/Preloader";

type mdtpType = {
    initializedAppThunk: () => void;
};
type mstpType = {
    initialized: boolean;
};
type AppPropsType = mdtpType & mstpType;

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializedAppThunk();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        } else {
            return (
                <div className="app-wrapper">
                    <HeaderContainer />
                    <Navbar />
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/profile/:userId" element={<ProfileContainer />} />
                            <Route path="/profile/" element={<ProfileContainer />} />
                            <Route path="/dialogs/*" element={<DialogsContainer />} />
                            <Route path="/users" element={<UsersContainer />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/news/" element={<News />} />
                            <Route path="/music/" element={<Music />} />
                            <Route path="/settings/" element={<Settings />} />
                        </Routes>
                    </div>
                </div>
            );
        }
    }
}

const mstp = (state: AppStateType): mstpType => {
    return {
        initialized: state.app.initialized,
    };
};

const mdtp = (dispatch: any): mdtpType => {
    return {
        initializedAppThunk: () => {
            dispatch(initializeAppTC());
        },
    };
};

export default compose(withRouter, connect(mstp, mdtp))(App);
