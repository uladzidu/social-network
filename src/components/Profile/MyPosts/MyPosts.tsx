import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css'
import {AppPropsType, PostDataType, StatePropsType} from '../../../redux/state';


type MyPostPropsType = {
    postData : PostDataType[]
}

export const MyPosts = (props: MyPostPropsType) => {

    let mappedPost = props.postData.map(p => <Post postMessage={p.postMessage} likes={p.likes} id={p.id}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {mappedPost}
            </div>
        </div>
    )
}


