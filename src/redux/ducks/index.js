import {combineReducers} from 'redux';
import types from './types';
import dishes from './dishes';
import extras from './extras';
import loading from './loading';
import basket from './basket';

const rootReducer = combineReducers({types,dishes,extras,loading,basket});

export default rootReducer;