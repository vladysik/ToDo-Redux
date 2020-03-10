import { combineReducers } from 'redux';
import todoReducer from './todo.js';

const rootReducer = combineReducers({ todoReducer });

export default rootReducer;