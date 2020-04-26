import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/randomUsersActions';

// init state
const initialState = {
  loading: false,
  users: [],
  error: ''
};

export const randomUsersReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        users: [],
        loading: true,
        error: ''
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...prevState,
        loading: false,
        users: action.payload
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      };
    default:
      return prevState;
  }
}

