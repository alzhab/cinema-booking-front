import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import { Provider } from 'react-redux'
import store from './redux';
import { BrowserRouter as Router } from 'react-router-dom'

import './assets/css/index.css';
import { ScrollToTop } from 'layouts';

const app = <Provider store={store}><Router><ScrollToTop><App /></ScrollToTop></Router></Provider>

ReactDOM.render(app, document.getElementById('root'));
