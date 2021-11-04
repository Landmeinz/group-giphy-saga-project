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


// sends axios.get to call the GIPHY API
function* fetchResults(action) {
    try {
        const response = yield axios({
            method: 'GET', 
            url: `/api/search/${action.payload}`
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
}

const sagaMiddleware = createSageMiddleware();

const storeInstance = createStore(
    combineReducers({results}), 
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));


