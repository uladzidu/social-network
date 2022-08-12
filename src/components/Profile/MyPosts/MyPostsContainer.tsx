import React from 'react';
import {addPostCreator, updateNewPostCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToMyPostsPropsType = {
    posts : any
    newPostText : string
}
type mapDispatchToMyPostsProps = {
    updateNewPostText : (text : string) => void
    addPost : () => void
}

const mapStateToMyPostsProps = (state : AppStateType) : mapStateToMyPostsPropsType => {
    return {
        posts : state.profilePage.postData,
        newPostText : state.profilePage.newPostText
    }
}

const mapDispatchToMyPostsProps = (dispatch : Dispatch) : mapDispatchToMyPostsProps => {
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

