/* 
  types of actions
*/
export const INCREASE_BY_ONE = 'INCREASE_BY_ONE';
export const DECREASE_BY_ONE = 'DECREASE_BY_ONE';
export const INCREASE_BY_RANDOM = 'INCREASE_BY_RANDOM';
export const DECREASE_BY_RANDOM = 'DECREASE_BY_RANDOM';
export const INIT = 'INIT';

/*
  action creators
*/

export function init() {
  return {
    type: INIT,
    payload: 0
  }
}

export function increaseByOne() {
  return {
    type: INCREASE_BY_ONE,
    payload: 1
  }
}

export function decreaseByOne() {
  return {
    type: DECREASE_BY_ONE,
    payload: 1
  }
}

// add random value
export function increaseByRnd() {
  const randomVal = Math.floor(Math.random() * 10);

  return {
    type: INCREASE_BY_RANDOM,
    payload: randomVal
  }
}

// minus random value
export function decreaseByRnd() {
  const randomVal = Math.floor(Math.random() * 10);

  return {
    type: DECREASE_BY_RANDOM,
    payload: randomVal
  }
}