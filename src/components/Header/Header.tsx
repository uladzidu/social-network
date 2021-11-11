import React from "react";
import s from '../Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://static.wirtualnemedia.pl/media/top/volvo-logonowe-655.jpg' alt={'volvo'}/>
        </header>
    )
}