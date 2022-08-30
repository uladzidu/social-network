import React from "react";
import s from './Header.module.css';
import {Link} from "react-router-dom";
import {Preloader} from "../common/preloader/Preloader";

type HeaderPropsType = {
    isAuth: boolean
    setUserData:
        (id: number | null, email: string | null,
         login: string | null) => void
    login: string | null
    isFetching: boolean | null
}

export const Header = (props: HeaderPropsType) => {
    return (
        <>

            <header className={s.header}>
                <img src='https://static.wirtualnemedia.pl/media/top/volvo-logonowe-655.jpg' alt={'volvo'}/>
                <div className={s.loginBlock}>
                    {props.isFetching ? <Preloader/> : null}
                    {
                        props.isAuth
                            ? props.login
                            : <Link className={s.loginText} to={'/login'}>Login</Link>
                    }
                </div>
            </header>
        </>

    )
}