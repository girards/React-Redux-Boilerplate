/**
 *
 * SignUpPage
 *
 */
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import SignUpPage from './SignUpPage';
import {
  makeSelectUserFormData,
  makeSelectSubmitAwaitingResponse,
} from '../../redux/SignUpPage/selectors';
import styles from './styles';
import {
  onFormValueChangeAction,
  onSubmitSignupAction,
} from '../../redux/SignUpPage/actions';

const mapStateToProps = createStructuredSelector({
  userFormData: makeSelectUserFormData(),
  isSubmitAwaitingResponse: makeSelectSubmitAwaitingResponse(),
});

const mapDispatchToProps = dispatch => ({
  handleUserForm: (event, { name, value }) =>
    dispatch(onFormValueChangeAction(name, value)),
  submitSignUp: userData => dispatch(onSubmitSignupAction(userData)),
});

export default injectIntl(
  withStyles(styles)(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(SignUpPage),
  ),
);
