import { initialState } from './reducer';

/**
 * Direct selector to the notFoundPage state domain
 */

const selectNotFoundPageDomain = state => state.notFoundPage || initialState;

/**
 * Other specific selectors
 */

export { selectNotFoundPageDomain };
