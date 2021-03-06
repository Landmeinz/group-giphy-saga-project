import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSageMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// search results reducer
const setResults = (state = [], action) => {
  console.log('this is the action in setResults', action);

  switch (action.type) {
    case 'SET_RESULTS':
      return action.payload;
    default:
      return state;
  }
};

//set favorites reducer
const setFavorites = (state = [], action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return action.payload;
    default:
      return state;
  }
};

// set categories reducer
const setCategories = (state = [], action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return action.payload;
    default:
      return state;
  }
};

//GET all favorites from DB
function* fetchFavorites() {
  try {
    const response = yield axios.get('api/favorite');
    yield put({ type: 'SET_FAVORITES', payload: response.data });
  } catch (err) {
    log('Error on fetchFavorites: ', err);
    yield put({ type: 'FETCH_FAVS_ERROR' });
  }
}

function* selectCategory(action) {
    try{
        yield axios.put(`/api/favorite/${action.payload.id}`, action.payload)
    } catch (err) {
        console.log('Error on PUT');
        
    }
}

//posts favorites array from reducer to DB
//could also be set up like fetchResults
function* postFavorite(action) {
  try {
    yield axios.post('/api/favorite', action.payload);
  } catch (err) {
    console.log('Error on Post', err);
    yield put({ type: 'POST_ERROR' });
  }
}

// sends axios.get to call the GIPHY API
function* fetchResults(action) {
  console.log('this is the action in fetchResults', action);

  try {
    const response = yield axios({
      method: 'GET',
      url: `/api/search/${action.payload}`,
    });
    yield put({ type: 'SET_RESULTS', payload: response.data });
  } catch (err) {
    console.log('Error on GET: ', err);
    yield put({ type: 'GET_ERROR' });
  }
}

// sends axios.got to retrieve the categories from the db
function* fetchCategories(action) {
  console.log('this is the action in fetchCategories', action);

  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/category',
    });
    yield put({ type: 'SET_CATEGORIES', payload: response.data });
  } catch (err) {
    console.log('Error on GET: (categories) ', err);
    yield put({ type: 'GET_ERROR' });
  }
}

function* rootSaga() {
  // search button dispatches a GET_RESULTS action caught here
  yield takeEvery('GET_RESULTS', fetchResults);
  yield takeEvery('ADD_FAVORITE', postFavorite);
  yield takeEvery('GET_FAVORITES', fetchFavorites);
  yield takeEvery('GET_CATEGORIES', fetchCategories);
  yield takeEvery('SELECT_CATEGORY', selectCategory)
}

const sagaMiddleware = createSageMiddleware();

const storeInstance = createStore(
  combineReducers({ setResults, setFavorites, setCategories }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
