import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css'
import {addPost, PostDataType} from '../../../redux/state';


type MyPostPropsType = {
    postData : PostDataType[]
}

export const MyPosts = (props: MyPostPropsType) => {

    let mappedPost = props.postData.map(p => <Post postMessage={p.postMessage} likes={p.likes} id={p.id}/>)

    let newPostElement = React.createRef()
    let localAddPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref = {newPostElement}></textarea>
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


