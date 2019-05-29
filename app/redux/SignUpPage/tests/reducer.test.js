// import produce from 'immer';
import { fromJS } from 'immutable';
import signUpPageReducer from '../reducer';
import { onSubmitSignupAction, onFormValueChangeAction } from '../actions';
// import { someAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('signUpPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      userFormData: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      isSubmitAwaitingResponse: false,
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(signUpPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the onFormValueChangeAction action correctly', () => {
    const expectedResult = state.setIn(['userFormData', 'username'], 'test');
    expect(
      signUpPageReducer(state, onFormValueChangeAction('username', 'test')),
    ).toEqual(expectedResult);
  });

  it('should handle the onSubmitSignupAction action correctly', () => {
    const expectedResult = state.set('isSubmitAwaitingResponse', true);
    const userData = {
      username: 'username',
      email: 'email@mail.com',
      password: 'password',
      passwordConfirmation: 'password',
    };
    expect(signUpPageReducer(state, onSubmitSignupAction(userData))).toEqual(
      expectedResult,
    );
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
