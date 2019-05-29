import { onFormValueChangeAction, onSubmitSignupAction } from '../actions';
import { FORM_VALUE_CHANGE_ACTION, SUBMIT_SIGNUP_ACTION } from '../constants';

describe('SignUpPage actions', () => {
  describe('Form Value Change Action', () => {
    it('has a type of FORM_VALUE_CHANGE_ACTION', () => {
      const expected = {
        type: FORM_VALUE_CHANGE_ACTION,
        params: { name: 'name', value: 'value' },
      };
      expect(onFormValueChangeAction('name', 'value')).toEqual(expected);
    });
  });

  describe('Submit SignUp Action', () => {
    it('has a type of SUBMIT_SIGNUP_ACTION', () => {
      const userData = {
        username: 'username',
        email: 'email@mail.com',
        password: 'password',
        passwordConfirmation: 'password',
      };
      const expected = {
        type: SUBMIT_SIGNUP_ACTION,
        params: userData,
      };
      expect(onSubmitSignupAction(userData)).toEqual(expected);
    });
  });
});
