import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addPost} from './redux/state'
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <App state={state}/>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();