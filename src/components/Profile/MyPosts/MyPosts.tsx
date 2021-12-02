import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css'
import {AppType, PostDataType} from '../../../index';



export const MyPosts = (props:AppType) => {

    let mappedPost = props.postData.map(post => <Post postMessage={post.postMessage} likes={post.likes}/>)

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


