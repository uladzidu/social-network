import React from 'react';
import s from './Post.module.css';
import {PostDataType,} from '../../../../redux/state';


export const Post = (props: PostDataType) => {
    return (
        <div className={s.item}>
            <img
                src="https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg"
                alt="f"/>
            {props.postMessage}
            <div>
                <span>like {props.likes}</span>
            </div>
        </div>
    )
}