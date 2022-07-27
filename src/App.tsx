import React from 'react';
import './App.css'
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Navbar} from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Musics';
import {Settings} from './components/Settings/Settings';
import {StoreType} from "./redux/state";
import {DialogsContainer} from "./components/Dialogs/Message/DialogsContainer";

type AppPropsType = {
    store : StoreType
}


export function App(props: AppPropsType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/*"
                           element={ <Profile store={props.store} />}
                    />
                    <Route path="/dialogs/*"
                           element={ <DialogsContainer store = {props.store} />}
                    />
                    <Route path="/news/" element={<News/>}/>
                    <Route path="/music/" element={<Music/>}/>
                    <Route path="/settings/" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

