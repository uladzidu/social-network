import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/state";

type ProfilePropsType = {
    store: StoreType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store = {props.store}/>
        </div>
    )
}

