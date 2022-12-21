import React, { useEffect } from "react";
import s from "./ProfileInfo.module.css";
import { ProfileStatusWithHooks } from "../ProfileStatus/ProfileStatusWithHooks";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-store";
import { getUserProfileTC } from "../../../redux/profile-reducer";

export const ProfileInfo = (props: { userId: number }) => {
    const largePhoto = useAppSelector((state) => state.profilePage.photos.large);

    const { fullName, aboutMe, status } = useAppSelector((state) => state.profilePage);
    const dispatch = useAppDispatch();

    const srcImgString =
        largePhoto === null
            ? "https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png"
            : largePhoto;

    // useEffect(() => {
    //     dispatch(getUserProfileTC(props.userId));
    // }, [dispatch, props.userId]);

    return (
        <div>
            <h1>{fullName}</h1>
            <p>{props.userId}</p>
            <div className={s.description}>
                <img src={srcImgString} alt={"profilePhoto" + props.userId} />
                <ProfileStatusWithHooks userId={props.userId} />
            </div>
            About me : {aboutMe}
        </div>
    );
};
