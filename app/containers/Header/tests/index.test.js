/**
 *
 * Tests for Header
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Header from '../Header';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('<Header />', () => {
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Header />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
