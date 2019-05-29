import { onFormValueChangeAction } from '../actions';
import { FORM_VALUE_CHANGE_ACTION } from '../constants';

describe('LoginPage actions', () => {
  describe('Default Action', () => {
    it('has a type of FORM_VALUE_CHANGE_ACTION', () => {
      const expected = {
        type: FORM_VALUE_CHANGE_ACTION,
        params: { name: 'name', value: 'value' },
      };
      expect(onFormValueChangeAction('name', 'value')).toEqual(expected);
    });
  });
});
