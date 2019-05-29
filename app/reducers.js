/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import signUpPageReducer from './redux/SignUpPage/reducer';
import loginPageReducer from './redux/LoginPage/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    signUpPage: signUpPageReducer,
    loginPage: loginPageReducer,
    router: connectRouter(history),
  });

  return rootReducer;
}
