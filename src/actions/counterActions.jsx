/* 
  types of actions
*/
export const INCREASE_BY_ONE = 'INCREASE_BY_ONE';
export const DECREASE_BY_ONE = 'DECREASE_BY_ONE';
export const INCREASE_BY_RANDOM = 'INCREASE_BY_RANDOM';
export const DECREASE_BY_RANDOM = 'DECREASE_BY_RANDOM'

/*
  action creators
*/

export const increaseByOne = () => {
  return {
    type: INCREASE_BY_ONE,
    payload: 1
  }
}

export const decreaseByOne = () => {
  return {
    type: DECREASE_BY_ONE,
    payload: 1
  }
}

// add random value
export const increaseByRnd = () => {
  const randomVal = Math.floor(Math.random() * 10);

  return {
    type: INCREASE_BY_RANDOM,
    payload: randomVal
  }
}

// minus random value
export const decreaseByRnd = () => {
  const randomVal = Math.floor(Math.random() * 10);

  return {
    type: DECREASE_BY_RANDOM,
    payload: randomVal
  }
}