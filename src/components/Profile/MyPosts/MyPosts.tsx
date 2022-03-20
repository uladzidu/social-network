import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css'
import state, {PostDataType} from '../../../redux/state';


type MyPostPropsType = {
    postData: PostDataType[]
    addPost: (postMessage: string) => void
    newPostText : string
    updateNewPostText : (newText : string ) => void
}

export const MyPosts = (props: MyPostPropsType) => {

    let mappedPost = props.postData.map(p => <Post id={p.id}
                                                   postMessage={p.postMessage}
                                                   likes={p.likes}
                                                   key={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let localAddPost = () => {
        if (newPostElement.current?.value) {
            props.addPost(newPostElement.current?.value)
        }
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
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value = {props.newPostText} />
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


