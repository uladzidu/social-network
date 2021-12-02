import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';


export type PostDataType = {
    id?: number, postMessage: string, likes: number
}

export type AppType = {
    postData?: Array<PostDataType>
    dialogsData?: Array<DialogDataType>
    messagesData?: Array<MessagesDataType>
}

let postData: Array<PostDataType> = [
    {id: 1, postMessage: 'Hi, how are you', likes: 5},
    {id: 2, postMessage: 'It\'s my first post', likes: 15},
    {id: 3, postMessage: 'It\'s my second post', likes: 15},
    {id: 4, postMessage: 'It\'s my third post', likes: 15},
]

export type DialogDataType = {
    name: string
    id?: number
}

export type MessagesDataType = {
    id?: number
    message: string
}

let dialogsData = [
    {id: 1, name: 'Vlados'},
    {id: 2, name: 'Gyn'},
    {id: 3, name: 'Andr'},
    {id: 4, name: 'Taras'},
    {id: 5, name: 'Sanya Big Boss'},
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are u?'},
    {id: 3, message: 'Good Job!'},
]

ReactDOM.render(<App postData={postData}
                     dialogsData={dialogsData}
                     messagesData={messagesData}/>, document.getElementById('root'));


serviceWorker.unregister();
