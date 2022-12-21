import React from "react";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { Preloader } from "../common/preloader/Preloader";
import { useAppSelector } from "../../redux/redux-store";
import { useDispatch } from "react-redux";
import { logoutTC } from "../../redux/login-reducer";

export const HeaderFuncComponent = () => {
    const login = useAppSelector((state) => state.auth.login);
    const isLoading = useAppSelector((state) => state.auth.isLoading);
    // const isAuth = useAppSelector((state) => state.auth.isAuth);
    const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);
    const email = useAppSelector((state) => state.auth.email);
    const dispatch = useDispatch();

    const logOutHandler = () => {
        // @ts-ignore
        dispatch(logoutTC());
    };
    // console.log(isAuth, "isAuth");
    // if (!login) return <Navigate to={"/login"} />;

    return (
        <>
            <header className={s.header}>
                <img
                    src="https://static.wirtualnemedia.pl/media/top/volvo-logonowe-655.jpg"
                    alt={"volvo"}
                />
                <div className={s.loginBlock}>
                    {isLoading ? <Preloader /> : null}
                    {email && (
                        <div>
                            {login} <button onClick={logOutHandler}>Logout</button>
                        </div>
                    )}
                    {!email && (
                        <Link className={s.loginText} to={"/login"}>
                            Login
                        </Link>
                    )}
                </div>
            </header>
        </>
    );
};
