import { INCREMENT, DECREMENT, RANDOM } from '../actions/counterActions';

// set initial state for Counter
const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    case RANDOM:
      return state + action.payload;
    default:
      return state;
  }
}

