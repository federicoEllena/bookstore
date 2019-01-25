import { combineReducers } from 'redux';
import todoListReducer from './todoListReducer';

export default combineReducers({
  todos: todoListReducer
});