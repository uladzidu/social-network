import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';
import {addPost, StatePropsType} from './redux/state'
import {BrowserRouter} from 'react-router-dom';


export let rerenderEntireTree = (state : StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root'));

}
