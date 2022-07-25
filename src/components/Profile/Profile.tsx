import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {PostDataType} from '../../redux/state';

type ProfilePropsType = {
    state: any
    dispatch : any
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch = {props.dispatch}
                     state = {props.state}/>
        </div>
    )
}

