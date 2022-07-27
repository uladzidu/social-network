import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
            {/*<MyPostsContainer store = {props.store}/>*/}
        </div>
    )
}

