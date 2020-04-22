import { ADD_VAL_TO_HISTORY } from '../actions/historyActions';

// set initial state for Counter
const initialState = '';

export const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VAL_TO_HISTORY:
      return action.payload;
    default:
      return state;
  }
}

