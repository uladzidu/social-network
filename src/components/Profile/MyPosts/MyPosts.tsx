import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css'
import {postData} from '../Profile';


export const MyPosts = () => {

    let mappedPost = postData.map(post => <Post message={props.postMessage} likes={props.likes}/>)

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

export type PropsType = {
    message: string
    likes: number
}
