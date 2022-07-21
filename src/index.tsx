import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';

import {BrowserRouter} from 'react-router-dom';
import {store} from "./redux/state";


export const rerenderEntireTree = (state : any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state = {state}
                 addPost = {store.addPost.bind(store)}
                 updateNewPostText = {store.updateNewPostText.bind(store)}
                 addMessage = {store.addMessage.bind(store)}
                 updateTextMessage = {store.updateTextMessage.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));

}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)