/*
 *
 * SignUpPage reducer
 *
 */
import { fromJS } from 'immutable';
import { FORM_VALUE_CHANGE_ACTION, SUBMIT_SIGNUP_ACTION } from './constants';

export const initialState = fromJS({
  userFormData: {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  },
  isSubmitAwaitingResponse: false,
});

/* eslint-disable default-case, no-param-reassign */
const signUpPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_VALUE_CHANGE_ACTION:
      return state.setIn(
        ['userFormData', action.params.name],
        action.params.value,
      );
    case SUBMIT_SIGNUP_ACTION:
      return state.set('isSubmitAwaitingResponse', true);
    default:
      return initialState;
  }
};

export default signUpPageReducer;
