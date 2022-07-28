import React from 'react';
import {addPostCreator, updateNewPostCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


const mapStateToMyPostsProps = (state : any) => {
    return {
        posts : state.profilePage.postData,
        newPostText : state.profilePage.newPostText
    }
}

const mapDispatchToMyPostsProps = (dispatch : any) => {
    return {
        updateNewPostText : (text : string) => {
            const action = updateNewPostCreator(text)
            dispatch(action)
        },
        addPost : () => {
            dispatch(addPostCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToMyPostsProps,mapDispatchToMyPostsProps)(MyPosts)

