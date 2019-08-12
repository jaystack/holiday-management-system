import { createAction, handleActions } from 'redux-actions';

/**
 * INITIAL STATE
 */
export const initialState = {
  value: ''
};

/**
 * ACTION TYPES
 */
export const EXAMPLE_EDIT_VALUE = 'EXAMPLE_EDIT_VALUE';
export const EXAMPLE_CLEAR = 'EXAMPLE_EDIT_VALUE';

/**
 * ACTION CREATORS
 */
export const exampleEditValue = createAction(
  EXAMPLE_EDIT_VALUE,
  value => value
);
export const exampleClear = createAction(
  EXAMPLE_CLEAR
);

/**
 * SELECTORS
 */
export const getExampleValue = state => state.example.value;

/**
 * REDUCER
 */
export const reducer = handleActions(
  {
    [exampleEditValue]: (state, { payload: value }) => ({ ...state, value }),
    [exampleClear]: () => initialState
  },
  initialState
);

/**
 * THUNK AND ASYNC ACTIONS
 */
