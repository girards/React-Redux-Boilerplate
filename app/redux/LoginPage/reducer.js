/*
 *
 * LoginPage reducer
 *
 */
import { fromJS } from 'immutable';
import { FORM_VALUE_CHANGE_ACTION } from './constants';

export const initialState = fromJS({
  userFormData: {
    email: '',
    password: '',
  },
});

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_VALUE_CHANGE_ACTION:
      return state.setIn(
        ['userFormData', action.params.name],
        action.params.value,
      );
    default:
      return initialState;
  }
};

export default loginPageReducer;
