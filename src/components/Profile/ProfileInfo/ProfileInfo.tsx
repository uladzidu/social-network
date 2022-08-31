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

    const srcImgString = props.profile.photos.large === null
        ? 'https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png'
        : props.profile.photos.large

    return (
        <div>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="hh"/>
            </div>
            <div className={s.description}>
                <img src={srcImgString} alt={'profilePhoto'+[props.profile.userId]}/>
                <div>ava + description</div>
            </div>
            {props.profile.aboutMe}
        </div>
    )
}

