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
                 dispatch = {store.dispatch.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));

}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)