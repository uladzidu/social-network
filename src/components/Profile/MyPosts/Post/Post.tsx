import React from 'react';
import s from './Post.module.css';
import {PropsType} from '../MyPosts';


export const Post = (pr: PropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg"
                alt="f"/>
            {pr.message}
            <div>
                <span>{pr.likes}</span>
            </div>
        </div>
    )
}