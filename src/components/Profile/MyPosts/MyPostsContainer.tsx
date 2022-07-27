import React from 'react';
import {addPostCreator, updateNewPostCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from '../../../StoreContext';
import {StoreType} from "../../../redux/state";


export const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            { (store : StoreType) => {
                let state = store.getState()
                let addAddPost = () => {
                    store.dispatch(addPostCreator())
                }
                let onPostChange = (text: string) => {
                    const action = updateNewPostCreator(text)
                    store.dispatch(action)
                }
                return (
                    <MyPosts updateNewPostText={onPostChange}
                             addPost={addAddPost}
                             posts={state.profilePage.postData}
                             newPostText={state.profilePage.newPostText}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    )
}


