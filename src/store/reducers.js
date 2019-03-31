import { combineReducers } from 'redux';
import { todoReducer } from './Todo/reducer';
import { filterReducer } from './Filter/reducer';

export default combineReducers({
    todo: todoReducer,
    filter: filterReducer
});