import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css'
import {PostDataType} from "../../../redux/state";


type MyPostPropsType = {
    posts: PostDataType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}


export const MyPosts = (props: MyPostPropsType) => {

    let mappedPost = props.posts.map((p: any) =>
        <Post key={p.id}
              id={p.id}
              postMessage={p.postMessage}
              likes={p.likes}
        />)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let localAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value as string
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
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


