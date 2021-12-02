import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';


export type PostDataType = {
    id : number
    postMessage: string
    likes: number
}

export type AppType = {
    postData : Array<PostDataType>
}

let postData : Array<PostDataType> = [
    {id: 1, postMessage: 'Hi, how are you', likes: 5},
    {id: 2, postMessage: 'It\'s my first post', likes: 15},
    {id: 3, postMessage: 'It\'s my second post', likes: 15},
    {id: 4, postMessage: 'It\'s my third post', likes: 15},
]


ReactDOM.render(<App postData={postData}/>,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
