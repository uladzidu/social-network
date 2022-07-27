import React from 'react';
import {addPostCreator, updateNewPostCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/state";

export type MyPostsContainerPropsType = {
    store : StoreType
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let state = props.store.getState()

    let addAddPost = () => {
        props.store.dispatch(addPostCreator())
    }

    let onPostChange = (text: string) => {
        const action = updateNewPostCreator(text)
        props.store.dispatch( action )
    }

    return (
       <MyPosts updateNewPostText = {onPostChange}
                addPost = {addAddPost}
                posts = {state.profilePage.postData}
                newPostText = {state.profilePage.newPostText}
       />
    )
}


