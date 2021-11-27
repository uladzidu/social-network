import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' style ={({ isActive}) => ({color: isActive ? 'blue' : 'white'})}> Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/profile">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/profile">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/profile">Settings</NavLink>
            </div>
        </nav>
    )
}