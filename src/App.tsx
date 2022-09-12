import React from 'react';
import './App.css'
import {Navbar} from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Musics';
import {Settings} from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator} from "./redux/auth-reducer";
import {compose} from "redux";
import {withRouter} from "./hoc/WithRouter";

type mdtpType = {
    getAuthUserDataThunk : () => void
}
type AppPropsType = mdtpType


class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.getAuthUserDataThunk()
    }

    render() {

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/:userId'
                               element={<ProfileContainer/>}
                        />
                        <Route path='/profile/'
                               element={<ProfileContainer/>}
                        />
                        <Route path="/dialogs/*"
                               element={<DialogsContainer/>}
                        />
                        <Route path='/users'
                               element={<UsersContainer/>}
                        />
                        <Route path='/login'
                               element={<Login/>}
                        />
                        <Route path="/news/" element={<News/>}/>
                        <Route path="/music/" element={<Music/>}/>
                        <Route path="/settings/" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mdtp = (dispatch : any) : mdtpType => {
    return {
        getAuthUserDataThunk: () => {
            dispatch(getAuthUserDataThunkCreator())
        },
    }
}

export default compose(
    withRouter,
    connect(null,mdtp)
)(App)
