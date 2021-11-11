import React from 'react';
import {Post} from './Post/Post';


export const MyPosts = () => {
    return (
        <div>
            My posts
            <Post
                message="Hi, how are you"
                likes={5}
            />
            <Post
                message="It's my first post"
                likes={15}
            />
        </div>
    )
}

export type PropsType = {
    message: string
    likes: number
}
