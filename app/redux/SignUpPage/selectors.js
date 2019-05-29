import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signUpPage state domain
 */

const selectSignUpPageDomain = state => state.signUpPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectUserFormData = () =>
  createSelector(
    selectSignUpPageDomain,
    signUpPageState => signUpPageState.get('userFormData').toJS(),
  );

const makeSelectSubmitAwaitingResponse = () =>
  createSelector(
    selectSignUpPageDomain,
    signUpPageState => signUpPageState.get('isSubmitAwaitingResponse'),
  );

export {
  selectSignUpPageDomain,
  makeSelectUserFormData,
  makeSelectSubmitAwaitingResponse,
};
