import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {PostDataType} from '../../redux/state';

type ProfilePropsType = {
    postData: PostDataType[]
    addPost: (postMessage: string) => void
    newPostText : string
    updateNewPostText : (newText : string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText ={props.updateNewPostText} />
        </div>
    )
}

