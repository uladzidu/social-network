import React, { useEffect } from "react";
import s from "./ProfileInfo.module.css";
import { ProfileStatusWithHooks } from "../ProfileStatus/ProfileStatusWithHooks";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-store";
import { getUserProfileTC, getUserStatusTC, setUserIdAC } from "../../../redux/profile-reducer";

export const ProfileInfo = (props: { userId: number }) => {
    // const fullName = useAppSelector((state) => state.profilePage.fullName);
    const largePhoto = useAppSelector((state) => state.profilePage.photos.large);
    // const aboutMe = useAppSelector((state) => state.profilePage.aboutMe);
    // const status = useAppSelector((state) => state.profilePage.status);

    const { fullName, aboutMe, status } = useAppSelector((state) => state.profilePage);

    // console.log("fullName : ", fullName);
    // console.log("status : ", status);
    // console.log("-------------------");
    // console.log(props.userId);
    const dispatch = useAppDispatch();

    // if (profile) {
    //     return (
    //         <div>
    //             <h1>No profile</h1>
    //         </div>
    //     );
    // }

    const srcImgString =
        largePhoto === null
            ? "https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png"
            : largePhoto;

    useEffect(() => {
        // dispatch(setUserIdAC(props.userId));
        dispatch(getUserProfileTC(props.userId));
        // dispatch(getUserStatusTC(props.userId));
    }, [dispatch, props.userId]);

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"*/}
            {/*        alt="hh"/>*/}
            {/*</div>*/}
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
