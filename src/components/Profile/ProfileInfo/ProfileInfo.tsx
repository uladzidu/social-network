import React, { useEffect } from "react";
import s from "./ProfileInfo.module.css";
import { ProfileStatusWithHooks } from "../ProfileStatus/ProfileStatusWithHooks";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-store";
import { getUserProfileTC } from "../../../redux/profile-reducer";
import { InputTypeFile } from "../../inputTypeFile/InputTypeFile";

export const ProfileInfo = (props: { userId: number }) => {
    const largePhoto = useAppSelector((state) => state.profilePage.photos.large);

    const { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } =
        useAppSelector((state) => state.profilePage);
    const dispatch = useAppDispatch();

    const { facebook, github, vk, twitter, website, youtube, mainLink, instagram } = contacts;

    const srcImgString =
        largePhoto === null
            ? "https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png"
            : largePhoto;

    useEffect(() => {
        dispatch(getUserProfileTC(props.userId));
    }, [dispatch, props.userId]);

    return (
        <div>
            <h1>{fullName}</h1>
            <p>{props.userId}</p>
            <div className={s.description}>
                <img src={srcImgString} alt={"profilePhoto" + props.userId} />
                <ProfileStatusWithHooks userId={props.userId} />
                <div>
                    <p>About me : {aboutMe ? aboutMe : "-"}</p>
                    <p>Looking For A Job : {lookingForAJob ? "yes" : "no"}</p>
                    <p>
                        Looking For A Job Description :{" "}
                        {lookingForAJobDescription ? lookingForAJobDescription : "-"}
                    </p>
                    <p>facebook : {facebook ? facebook : "-"}</p>
                    <p>github : {github ? github : "-"}</p>
                    <p>vk : {vk ? vk : "-"}</p>
                    <p>twitter : {twitter ? twitter : "-"}</p>
                    <p>website : {website ? website : "-"}</p>
                    <p>youtube : {youtube ? youtube : "-"}</p>
                    <p>mainLink : {mainLink ? mainLink : "-"}</p>
                    <p>instagram : {instagram ? instagram : "-"}</p>
                </div>
            </div>
            <InputTypeFile />
        </div>
    );
};
