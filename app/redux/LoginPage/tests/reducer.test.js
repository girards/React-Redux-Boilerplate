// import produce from 'immer';
import { fromJS } from 'immutable';
import loginPageReducer from '../reducer';
// import { someAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('loginPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      userFormData: {
        email: '',
        password: '',
      },
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(loginPageReducer(undefined, {})).toEqual(expectedResult);
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
