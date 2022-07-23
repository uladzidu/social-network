import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {PostDataType} from '../../redux/state';

type ProfilePropsType = {
    postData: PostDataType[]
    dispatch : any
    newPostText : string
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     dispatch = {props.dispatch}
                     newPostText={props.newPostText}/>
        </div>
    )
}

