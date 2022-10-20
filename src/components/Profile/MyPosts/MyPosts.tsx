import React from "react";
import { Post } from "./Post/Post";
import s from "./MyPosts.module.css";
import { PostDataType } from "../../../redux/profile-reducer";
import { AddPostReduxForm, FormDataPostType } from "../../common/Forms/AddPostForm";

type MyPostPropsType = {
    posts: PostDataType[];
    addPost: (newPostText: string) => void;
};

export const MyPosts = (props: MyPostPropsType) => {
    let mappedPost = props.posts.map((p: PostDataType) => (
        <Post key={p.id} id={p.id} postMessage={p.postMessage} likes={p.likes} />
    ));

    const localAddPost = (newPostText: string) => {
        props.addPost(newPostText);
    };

    const onSubmitHandler = (formData: FormDataPostType) => {
        localAddPost(formData.post);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={onSubmitHandler} />
            </div>
            <div className={s.posts}>{mappedPost}</div>
        </div>
    );
};
