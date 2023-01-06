import React, { MouseEventHandler, useEffect, useState } from "react";
import s from "./ProfileInfo.module.css";
import { ProfileStatusWithHooks } from "../ProfileStatus/ProfileStatusWithHooks";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-store";
import {
    getUserProfileTC,
    updateUserAvatarTC,
    updateUserDataTC,
} from "../../../redux/profile-reducer";
import { InputTypeFile } from "../../inputTypeFile/InputTypeFile";
import { SpanWithInput } from "../../common/SpanWithButton/SpanWithInput";

export const ProfileInfo = (props: { userId: number }) => {
    // @ts-ignore
    const largePhoto = useAppSelector((state) => state.profilePage.photos.large);

    const { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } =
        useAppSelector((state) => state.profilePage);
    const dispatch = useAppDispatch();

    const [edit, setEdit] = useState(false);
    const onChangeHandler = (e: any) => {};

    const contactsKeys = Object.keys(contacts);
    const contactsValues = Object.values(contacts);

    const srcImgString = largePhoto
        ? largePhoto
        : "https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png";

    useEffect(() => {
        dispatch(getUserProfileTC(props.userId));
        // dispatch(updateUserDataTC());
    }, [dispatch, props.userId]);

    return (
        <div>
            <h1>{fullName}</h1>
            <ProfileStatusWithHooks userId={props.userId} />
            <p>{props.userId}</p>
            <button disabled={edit} onClick={() => setEdit(!edit)}>
                Edit Profile
            </button>
            {edit && <button onClick={() => setEdit(!edit)}>Save</button>}
            <div className={s.description}>
                <img src={srcImgString} alt={"profilePhoto" + props.userId} />
                <div style={{ marginTop: "25px", marginLeft: "50px" }}>
                    <div>
                        <strong>About me :</strong> {aboutMe ? aboutMe : "-"}
                    </div>
                    <div>
                        <strong>Looking For A Job :</strong> {lookingForAJob ? "yes" : "no"}
                    </div>
                    <div style={{ marginTop: "25px" }}>
                        <strong>Social media : </strong>
                    </div>
                    {contactsKeys.map((keys, index) => (
                        <li key={index}>
                            <strong>{keys} : </strong>
                            {edit ? (
                                <input onChange={onChangeHandler} value={contactsValues[index]} />
                            ) : (
                                <span> {contactsValues[index]}</span>
                            )}
                        </li>
                    ))}

                    {/*<SpanWithInput name={"facebook"} />*/}
                </div>
            </div>
            <InputTypeFile />
        </div>
    );
};
