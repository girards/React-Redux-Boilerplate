import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectUserFormData = () =>
  createSelector(
    selectLoginPageDomain,
    signUpPageState => signUpPageState.get('userFormData').toJS(),
  );

export { selectLoginPageDomain, makeSelectUserFormData };
