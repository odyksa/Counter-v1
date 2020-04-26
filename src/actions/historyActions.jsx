/* 
  types of actions
*/
export const ADD_VAL_TO_HISTORY = 'ADD_VAL_TO_HISTORY';

/*
  action creators
*/

export function addValToHistory(newVal) {
  return {
    type: ADD_VAL_TO_HISTORY,
    payload: newVal
  }
}