import React, { useEffect, useState } from "react";
import s from "./ProfileInfo.module.css";
import { ProfileStatusWithHooks } from "../ProfileStatus/ProfileStatusWithHooks";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-store";
import { getUserProfileTC, ProfileType } from "../../../redux/profile-reducer";
import { ProfileDataForm } from "../ProfileDataForm";

export const ProfileInfo = (props: { userId: number }) => {
    const profile = useAppSelector((state) => state.profilePage);
    const authId = useAppSelector((state) => state.auth.id);
    const dispatch = useAppDispatch();

    const isMyProfile = +props.userId === authId;
    console.log(authId);
    console.log(props.userId);
    console.log("isMyProfile", isMyProfile);

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        dispatch(getUserProfileTC(props.userId));
    }, [dispatch, props.userId]);

    return (
        <div>
            <ProfileStatusWithHooks userId={props.userId} />
            <p>{props.userId}</p>
            <div className={s.description}>
                <img src={""} alt={"profilePhoto" + props.userId} />
                {editMode ? (
                    <ProfileDataForm profile={profile} />
                ) : (
                    <ProfileData
                        profile={profile}
                        isOwner={true}
                        activateEditMode={() => setEditMode(true)}
                    />
                )}
            </div>
        </div>
    );
};

const ProfileData = (props: {
    profile: ProfileType;
    isOwner: boolean;
    activateEditMode: () => void;
}) => {
    const { fullName, aboutMe, lookingForAJob, contacts } = props.profile;

    return (
        <div style={{ marginTop: "25px", marginLeft: "50px" }}>
            {props.isOwner && (
                <div>
                    <button onClick={props.activateEditMode}>Edit</button>
                </div>
            )}
            <div>
                <h1>{fullName}</h1>
                <strong>About me :</strong> {aboutMe ? aboutMe : "-"}
            </div>
            <div>
                <strong>Looking For A Job :</strong> {lookingForAJob ? "yes" : "no"}
                {lookingForAJob && <div>lookingForAJobDescription</div>}
            </div>
            <div style={{ marginTop: "25px" }}>
                <strong>Social media : </strong>
            </div>
            <div>
                Contacts :{" "}
                {Object.keys(contacts).map((key, index) => {
                    return (
                        <Contact
                            key={index}
                            contactTitle={key}
                            contactValue={Object.values(contacts)[index]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const Contact = (props: { contactTitle: any; contactValue: any }) => {
    return (
        <div>
            <strong>{props.contactTitle}</strong> : {props.contactValue}
        </div>
    );
};
