import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css'


export const MyPosts = () => {

    let postData = [
        {id: 1, postMessage: 'Hi, how are you', likes: 5},
        {id: 2, postMessage: 'It\'s my first post', likes: 15}
    ]

    let mappedPost = postData.map(post => <Post message={post.postMessage} likes={post.likes}/>)

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
