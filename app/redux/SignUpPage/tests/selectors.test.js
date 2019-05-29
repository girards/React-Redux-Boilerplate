import { fromJS } from 'immutable';
import {
  makeSelectUserFormData,
  makeSelectSubmitAwaitingResponse,
} from '../selectors';

describe('selectSignUpPageDomain', () => {
  let state;
  const userFormData = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };
  beforeEach(() => {
    state = fromJS({
      userFormData,
      isSubmitAwaitingResponse: false,
    });
  });

  it('Should test the makeSelectUserFormData selector', () => {
    const selectUserFormData = makeSelectUserFormData();
    expect(selectUserFormData(state)).toEqual(userFormData);
  });

  it('Should test the makeSelectSubmitAwaitingResponse selector', () => {
    const selectSubmitAwaitingResponse = makeSelectSubmitAwaitingResponse();
    expect(selectSubmitAwaitingResponse(state)).toEqual(false);
  });
});
