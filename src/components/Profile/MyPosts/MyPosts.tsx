import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css'
import {addPostCreator, updateNewPostCreator} from "../../../redux/profile-reducer";
import {ActionsAllTypes, StatePropsType} from "../../../redux/state";


type MyPostPropsType = {
    dispatch : (action: ActionsAllTypes) => void
    state : StatePropsType
}


export const MyPosts = (props: MyPostPropsType) => {

    let mappedPost = props.state.profilePage.postData.map((p : any) =>
        <Post key={p.id}
              id={p.id}
              postMessage={p.postMessage}
              likes={p.likes}
        />)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let localAddPost = () => {
        if (newPostElement.current?.value) {
            props.dispatch( addPostCreator() )
        }
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value as string
        let action = updateNewPostCreator(text)
        props.dispatch( action )
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.state.profilePage.newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={localAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {mappedPost}
            </div>
        </div>
    )
}


