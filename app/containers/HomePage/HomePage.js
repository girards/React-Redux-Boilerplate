import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

// eslint-disable-next-line react/prefer-stateless-function
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

HomePage.propTypes = {};
