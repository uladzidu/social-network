import React, {RefObject, useRef} from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css'
import {PostDataType} from '../../../redux/state';
import {rerenderEntireTree} from "../../../render";


type MyPostPropsType = {
    postData: PostDataType[]
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPostPropsType) => {

    let mappedPost = props.postData.map(p => <Post postMessage={p.postMessage} likes={p.likes} id={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let localAddPost = () => {
        if (newPostElement.current?.value) {
            props.addPost(newPostElement.current?.value)
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
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


