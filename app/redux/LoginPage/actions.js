/*
 *
 * LoginPage actions
 *
 */

import { FORM_VALUE_CHANGE_ACTION } from './constants';

export function onFormValueChangeAction(name, value) {
  return {
    type: FORM_VALUE_CHANGE_ACTION,
    params: { name, value },
  };
}
