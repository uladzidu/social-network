import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css'


export const MyPosts = () => {
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
                <Post message="Hi, how are you" likes={5}/>
                <Post message="It's my first post" likes={15}/>
            </div>
        </div>
    )
}

export type PropsType = {
    message: string
    likes: number
}
