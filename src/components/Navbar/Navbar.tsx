import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/redux-store";

export enum PATH {
    PROFILE = "/profile",
    LOGIN = "/login",
    FRIENDS = "/friends",
    DIALOGS = "/dialogs",
    USERS = "/users",
    NEWS = "/news",
    MUSIC = "/music",
    SETTINGS = "/settings",
}

export const Navbar = () => {
    const userId = useAppSelector((state) => state.auth.id);

    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink
                    to={PATH.PROFILE + "/" + userId}
                    style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}
                >
                    {" "}
                    Profile{" "}
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to={PATH.FRIENDS}
                    style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}
                >
                    Friends
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to={PATH.DIALOGS}
                    style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}
                >
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to={PATH.USERS}
                    style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}
                >
                    Users
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to={PATH.NEWS}
                    style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}
                >
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to={PATH.MUSIC}
                    style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}
                >
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to={PATH.SETTINGS}
                    style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}
                >
                    Settings
                </NavLink>
            </div>
        </nav>
    );
};
