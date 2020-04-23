import { INCREASE_BY_ONE, DECREASE_BY_ONE, INCREASE_BY_RANDOM, DECREASE_BY_RANDOM } from '../actions/counterActions';

// set initial state for Counter
const initialState = {
  result: 0
};

export const counterReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case INCREASE_BY_ONE:
      return {
        ...prevState,
        result: prevState.result + action.payload
      };
    case DECREASE_BY_ONE:
      return {
        ...prevState,
        result: prevState.result - action.payload
      };
    case INCREASE_BY_RANDOM:
      return {
        ...prevState,
        result: prevState.result + action.payload
      };
    case DECREASE_BY_RANDOM:
      return {
        ...prevState,
        result: prevState.result - action.payload
      };
    default:
      return prevState;
  }
}

