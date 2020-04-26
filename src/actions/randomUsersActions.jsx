import axios from 'axios';
import { RandomUsersService } from '../services/randomUsersService';
/*
  types of actions
*/
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

/*
  action creators
*/
export function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export function fetchUsers() {
  const { getRandomUsers } = new RandomUsersService();
  const limitUsers = 3; // quantity of users to get from Api

  return function (dispatch) {
    dispatch(fetchUsersRequest());
    getRandomUsers(limitUsers)
      .then((response) => {
        const users = response.data.results.map((user) => {
          return `${user.name.first} ${user.name.last}`
        });
        setTimeout(() => {
          dispatch(fetchUsersSuccess(users));
        }, 3000);
      })
      .catch((error) => {
        setTimeout(() => {
          dispatch(fetchUsersFailure(error.message));
        }, 3000);
      })
  }
}