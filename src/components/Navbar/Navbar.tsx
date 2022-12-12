import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/profile" style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}>
          {" "}
          Profile{" "}
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
