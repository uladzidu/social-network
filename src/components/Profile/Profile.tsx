import React from 'react';
import s from './Profile.module.css';
import {MyPosts, PostDataType} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';


export type MyPostsType = {
    postData : Array<PostDataType>
}

let postData = [
    {id: 1, postMessage: 'Hi, how are you', likes: 5},
    {id: 2, postMessage: 'It\'s my first post', likes: 15},
    {id: 3, postMessage: 'It\'s my second post', likes: 15},
    {id: 4, postMessage: 'It\'s my third post', likes: 15},
]

export const Profile = (props : MyPostsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData = {postData}/>
        </div>
    )
}

