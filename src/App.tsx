import React from 'react';
import './App.css'
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Navbar} from './components/Navbar/Navbar';


export const App = () => {
    return (
        <div className="app-wrapper">

            <Header/>
            <Navbar/>
            <Profile/>

        </div>
    )
}

