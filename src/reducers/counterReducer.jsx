import { INCREASE_BY_ONE, DECREASE_BY_ONE, INCREASE_BY_RANDOM, DECREASE_BY_RANDOM } from '../actions/counterActions';

// set initial state for Counter
const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_BY_ONE:
      return state + action.payload;
    case DECREASE_BY_ONE:
      return state - action.payload;
    case INCREASE_BY_RANDOM:
      return state + action.payload;
    case DECREASE_BY_RANDOM:
      return state - action.payload
    default:
      return state;
  }
}

