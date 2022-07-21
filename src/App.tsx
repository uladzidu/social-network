import React from 'react';
import './App.css'
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Musics';
import {Settings} from './components/Settings/Settings';

type AppPropsTYpe = {
    state: any
    addPost: () => void
    updateNewPostText: (newText : string) => void
    addMessage: () => void
    updateTextMessage: (newMessage: string) => void
}


export function App(props: AppPropsTYpe) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/*"
                           element={<Profile postData={props.state.profilePage.postData}
                                             addPost={props.addPost}
                                             newPostText={props.state.profilePage.newPostText}
                                             updateNewPostText={props.updateNewPostText}
                           />}/>
                    <Route path="/dialogs/*" element={<Dialogs dialogsData={props.state.messagesPage.dialogsData}
                                                               messagesData={props.state.messagesPage.messagesData}
                                                               addMessage={props.addMessage}
                                                               newMessageText={props.state.messagesPage.newMessageText}
                                                               updateTextMessage={props.updateTextMessage}

                    />}/>
                    <Route path="/news/" element={<News/>}/>
                    <Route path="/music/" element={<Music/>}/>
                    <Route path="/settings/" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

