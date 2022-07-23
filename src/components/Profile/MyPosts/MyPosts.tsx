import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css'
import {addPostActionCreator, PostDataType, updateNewPostActionCreator} from '../../../redux/state';


type MyPostPropsType = {
    postData: PostDataType[]
    dispatch : any
    newPostText: string
}



export const MyPosts = (props: MyPostPropsType) => {

    let mappedPost = props.postData.map(p =>
        <Post key={p.id}
              id={p.id}
              postMessage={p.postMessage}
              likes={p.likes}
        />)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let localAddPost = () => {
        if (newPostElement.current?.value) {
            props.dispatch( addPostActionCreator() )
        }
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value as string
        const action = updateNewPostActionCreator(text)

        props.dispatch( action )

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


