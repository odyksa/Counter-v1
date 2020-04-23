import { ADD_VAL_TO_HISTORY } from '../actions/randomUsersActions';

const initialState = {
  loading: false,
  users: [],
  error: false
};

export const historyReducer = (prevState = initialState, action) => {
  console.log(action.payload);
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

