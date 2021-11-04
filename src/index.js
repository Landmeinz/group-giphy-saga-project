import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react';
import logger from 'redux-logger';
import createSageMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

const results = (state = [], action) => {
    switch(action.type) {
        case 'SET_RESULTS':
            return action.payload
        default:
            return state;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
