// store.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import blogReducer from './blog/blogReducer';

const rootReducer = combineReducers({
  blog: blogReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
