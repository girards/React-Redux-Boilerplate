/*
 *
 * SignUpPage actions
 *
 */

import { FORM_VALUE_CHANGE_ACTION, SUBMIT_SIGNUP_ACTION } from './constants';

export function onFormValueChangeAction(name, value) {
  return {
    type: FORM_VALUE_CHANGE_ACTION,
    params: { name, value },
  };
}

export function onSubmitSignupAction(userData) {
  return {
    type: SUBMIT_SIGNUP_ACTION,
    params: userData,
  };
}
