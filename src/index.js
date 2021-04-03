import ReactDom from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App.js';

ReactDom.render(
    <BrowserRouter basename='/dashboard'>
            <App/>
    </BrowserRouter>,
    document.getElementById('root')
);