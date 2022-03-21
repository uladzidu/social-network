import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';
import {addMessage, addPost, state, StatePropsType, updateNewPostText, updateTextMessage} from './redux/state'
import {BrowserRouter} from 'react-router-dom';


export let rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateTextMessage={updateTextMessage}
            />
        </BrowserRouter>, document.getElementById('root'));

}


rerenderEntireTree(state)
