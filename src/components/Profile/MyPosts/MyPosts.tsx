import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css'
import {AppPropsType, StatePropsType} from '../../../redux/state';


export const MyPosts = (props: AppPropsType) => {

    let mappedPost = props.state.profilePage.postData.map(p => <Post postMessage={p.postMessage} likes={p.likes} id={p.id}/>)

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


