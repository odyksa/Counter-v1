/* 
  types of actions
*/
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RANDOM = 'RANDOM';

/*
  action creators
*/

// increase by one
export const increment = () => {
  return {
    type: INCREMENT,
    payload: 1
  }
}

// decrease by one
export const decrement = () => {
  return {
    type: DECREMENT,
    payload: 1
  }
}

// set random value
export const random = () => {
  const randomVal = Math.floor(Math.random() * 10);

  return {
    type: RANDOM,
    payload: randomVal
  }
}