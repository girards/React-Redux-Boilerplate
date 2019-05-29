import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Header } from 'semantic-ui-react';
import messages from './messages';

// eslint-disable-next-line react/prefer-stateless-function
export default class SignUpPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.validatePasswordInput.bind(this);
    this.validateEmailInput.bind(this);
  }

  validateEmailInput(userFormData) {
    return (
      (userFormData.email.length > 0 && userFormData.email.includes('@')) ===
      false
    );
  }

  validatePasswordInput(userFormData) {
    return userFormData.password.length > 6 === false;
  }

  render() {
    return (
      <div>
        <Form size="large" className={this.props.classes.form}>
          <Header
            as="h2"
            content={this.props.intl.formatMessage(messages.signUpHeaderTitle)}
            subheader="For this amazing project that doesn't have a name"
          />
          <Form.Input
            id="username-input"
            name="username"
            icon="user"
            iconPosition="left"
            placeholder="Username"
            onChange={this.props.handleUserForm}
            value={this.props.userFormData.username}
            required
          />
          <Form.Input
            id="email-input"
            name="email"
            icon="at"
            iconPosition="left"
            placeholder="E-mail Address"
            error={this.validateEmailInput(this.props.userFormData)}
            onChange={this.props.handleUserForm}
            required
          />
          <Form.Input
            id="password-input"
            name="password"
            iconPosition="left"
            placeholder="Password"
            type="password"
            error={this.validatePasswordInput(this.props.userFormData)}
            icon="lock"
            onChange={this.props.handleUserForm}
            required
          />
          <Form.Input
            id="password-confirm-input"
            name="passwordConfirmation"
            icon="lock"
            iconPosition="left"
            placeholder="Confirm Password"
            type="password"
            error={this.validatePasswordInput(this.props.userFormData)}
            onChange={this.props.handleUserForm}
            required
          />
          <Button
            fluid
            primary
            disabled={
              this.validatePasswordInput(this.props.userFormData) ||
              this.validateEmailInput(this.props.userFormData)
            }
            loading={this.props.isSubmitAwaitingResponse}
            onClick={() => this.props.submitSignUp(this.props.userFormData)}
          >
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  userFormData: PropTypes.shape({
    username: PropTypes.shape.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirmation: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    form: PropTypes.string.isRequired,
  }).isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
  handleUserForm: PropTypes.func.isRequired,
  isSubmitAwaitingResponse: PropTypes.bool.isRequired,
  submitSignUp: PropTypes.func.isRequired,
};
