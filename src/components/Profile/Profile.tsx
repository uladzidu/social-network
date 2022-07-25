import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {ActionsAllTypes, StatePropsType} from '../../redux/state';

type ProfilePropsType = {
    state: StatePropsType
    dispatch : (action: ActionsAllTypes) => void
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

