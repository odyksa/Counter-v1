import { ADD_VAL_TO_HISTORY } from '../actions/historyActions';

// set initial state for History
const initialState = {
  lastThreeResults: []
};

export const historyReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_VAL_TO_HISTORY:
      return {
        ...prevState,
        lastThreeResults: action.payload
      };
    default:
      return prevState;
  }
}

