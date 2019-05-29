import React from 'react';
import PropTypes from 'prop-types';
import { Form, Header, Button } from 'semantic-ui-react';
import messages from './messages';

// eslint-disable-next-line react/prefer-stateless-function
export default class LoginPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Form size="large" className={this.props.classes.form}>
          <Header
            as="h2"
            content={this.props.intl.formatMessage(messages.loginHeaderTitle)}
            subheader="To this amazing project that doesn't have a name"
          />
          <Form.Input
            id="email-input"
            name="email"
            icon="at"
            iconPosition="left"
            placeholder="E-mail Address"
            onChange={this.props.handleUserForm}
            required
          />
          <Form.Input
            id="password-input"
            name="password"
            iconPosition="left"
            placeholder="Password"
            type="password"
            icon="lock"
            onChange={this.props.handleUserForm}
            required
          />
          <Button fluid primary>
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.shape({
    form: PropTypes.string.isRequired,
  }).isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
  handleUserForm: PropTypes.func.isRequired,
};
