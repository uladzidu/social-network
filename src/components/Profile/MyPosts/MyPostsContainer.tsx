import React from "react";
import { addPostAC, PostDataType } from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";

type mapStateToMyPostsPropsType = {
    posts: PostDataType[];
};
type mapDispatchToMyPostsProps = {
    addPost: (newPostText: string) => void;
};

const mapStateToMyPostsProps = (state: AppStateType): mapStateToMyPostsPropsType => {
    return {
        posts: state.profilePage.postData,
    };
};

const mapDispatchToMyPostsProps = (dispatch: Dispatch): mapDispatchToMyPostsProps => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText));
        },
    };
};

export const MyPostsContainer = connect(mapStateToMyPostsProps, mapDispatchToMyPostsProps)(MyPosts);
