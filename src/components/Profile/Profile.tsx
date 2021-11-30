import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';


export const postData= [
    {id: 1, postMessage: 'Hi, how are you', likes: 5},
    {id: 2, postMessage: 'It\'s my first post', likes: 15},
    {id: 3, postMessage: 'It\'s my second post', likes: 15},
    {id: 4, postMessage: 'It\'s my third post', likes: 15},
]


export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                data = {postData} />
        </div>
    )
}