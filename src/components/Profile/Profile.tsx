import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {AppPropsType, StatePropsType} from '../../redux/state';


export const Profile = (props : StatePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData}/>
        </div>
    )
}

