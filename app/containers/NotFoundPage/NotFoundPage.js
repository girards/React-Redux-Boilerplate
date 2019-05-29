import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

// eslint-disable-next-line react/prefer-stateless-function
export default class NotFoundPage extends React.PureComponent {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

NotFoundPage.propTypes = {};
