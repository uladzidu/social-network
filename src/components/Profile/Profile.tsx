import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {AppType} from '../../index';


export const Profile = (props: AppType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}

