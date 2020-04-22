import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { historyReducer } from './historyReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  history: historyReducer
});