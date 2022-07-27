import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';

import {BrowserRouter} from 'react-router-dom';
import {StatePropsType, store} from "./redux/state";


export const rerenderEntireTree = (state : StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>, document.getElementById('root'));

}

const stateFromStore = store.getState()
rerenderEntireTree(stateFromStore)
store.subscribe(rerenderEntireTree)