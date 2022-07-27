import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';

import {BrowserRouter} from 'react-router-dom';
import {StoreContext} from "./StoreContext";
import {StatePropsType, store} from "./redux/state";


export const rerenderEntireTree = (state : StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>

        </BrowserRouter>, document.getElementById('root'));

}

const stateFromStore = store.getState()
rerenderEntireTree(stateFromStore)
store.subscribe(rerenderEntireTree)