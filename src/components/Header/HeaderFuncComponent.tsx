import React from "react";
import s from "./Header.module.css";
import { Link, Navigate } from "react-router-dom";
import { Preloader } from "../common/preloader/Preloader";
import { useAppSelector } from "../../redux/redux-store";
import { logoutTC } from "../../redux/auth-reducer";
import { useDispatch } from "react-redux";

// type HeaderPropsType = {
//     isAuth: boolean;
//     login: string | null;
//     isFetching: boolean | null;
//     // getAuthUserDataThunk: () => void
//     logoutThunk: () => void;
// };

export const HeaderFuncComponent = () => {
    const login = useAppSelector((state) => state.auth.login);
    const isLoading = useAppSelector((state) => state.auth.isLoading);
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();
    console.log(login);

    const logOutHandler = () => {
        // @ts-ignore
        dispatch(logoutTC());
    };

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
                    {isAuth ? (
                        <div>
                            {login} <button onClick={logOutHandler}>Logout</button>
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
