import React from "react";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { Preloader } from "../common/preloader/Preloader";

type HeaderPropsType = {
    isAuth: boolean;
    login: string | null;
    isFetching: boolean | null;
    // getAuthUserDataThunk: () => void
    logoutThunk: () => void;
};

export const Header = (props: HeaderPropsType) => {
    const logOutHandler = () => {
        props.logoutThunk();
    };
    return (
        <>
            <header className={s.header}>
                <img
                    src="https://static.wirtualnemedia.pl/media/top/volvo-logonowe-655.jpg"
                    alt={"volvo"}
                />
                <div className={s.loginBlock}>
                    {props.isFetching ? <Preloader /> : null}
                    {props.isAuth ? (
                        <div>
                            {props.login} <button onClick={logOutHandler}>Logout</button>
                        </div>
                    ) : (
                        <Link className={s.loginText} to={"/login"}>
                            Login
                        </Link>
                    )}
                </div>
            </header>
        </>
    );
};
