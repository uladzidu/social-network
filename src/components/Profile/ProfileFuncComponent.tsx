import React, { useEffect } from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { Navigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/redux-store";
import { authMeTC } from "../../redux/auth-reducer";
import { PATH } from "../Navbar/Navbar";
import { Preloader } from "../common/preloader/Preloader";

export const ProfileFuncComponent = () => {
    const { userId } = useParams<{ userId: any }>();
    const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const email = useAppSelector((state) => state.auth.email);
    const dispatch = useAppDispatch();
    console.log("email : ", email);

    // useEffect(() => {
    //     dispatch(authMeTC());
    // }, []);

    // if (!email) return <Preloader />;
    // if (!isLoggedIn) return <Navigate to={PATH.LOGIN} />;

    return (
        <div>
            <ProfileInfo userId={userId} />
            <MyPostsContainer />
        </div>
    );
};
