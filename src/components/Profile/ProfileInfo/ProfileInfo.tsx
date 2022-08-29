import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/Preloader";
import {profileType} from "../Profile";

export type ProfileInfoPropsType = {
    profile: profileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="hh"/>
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.large} alt={'profilePhoto'}/>
                ava + description
            </div>
            {props.profile.aboutMe}
        </div>
    )
}

