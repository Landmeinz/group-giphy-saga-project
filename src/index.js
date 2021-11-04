import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSageMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// search results reducer
const setResults = (state = [], action) => {
    switch(action.type) {
        case 'SET_RESULTS':
            return action.payload
        default:
            return state;
    }
}

//set favorites reducer
const setFavorites = (state = [], action) => {
    switch(action.type) {
        case 'SET_FAVORITES':
            return [...state, action.payload]
        default:
            return state;
    }
}

//posts favorites array from reducer to DB
//could also be set up like fetchResults
function* postFavorites(action) {
    try {
       yield axios.post ('/api/favorite', setFavorites) 
    } catch (err) {
        console.log('Error on Post', err);
        yield put({type: 'POST_ERROR'})
    }
}

// sends axios.get to call the GIPHY API
function* fetchResults(action) {
    try {
        const response = yield axios({
            method: 'GET', 
            url: `/api/search/${action.payload}`});
        yield put({type: 'SET_RESULTS', payload: response.data});
    } catch (err) {
        console.log('Error on GET: ', err);
        yield put({type: 'GET_ERROR'})
    }
}

function* rootSaga() {
    // search button dispatches a GET_RESULTS action caught here
    yield takeEvery('GET_RESULTS', fetchResults)
    yield takeEvery('SET_RESULTS', setResults)
    yield takeEvery('SET_FAVORITES', postFavorites)
    yield takeEvery('GET_FAVORITES', fetchFavorites)
}

const sagaMiddleware = createSageMiddleware();

const storeInstance = createStore(
    combineReducers({results}), 
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));


