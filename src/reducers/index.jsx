import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { historyReducer } from './historyReducer';
import { randomUsersReducer } from './randomUsersReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  history: historyReducer,
  randomUsers: randomUsersReducer
});