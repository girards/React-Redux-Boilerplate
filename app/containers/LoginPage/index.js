/**
 *
 * LoginPage
 *
 */
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { makeSelectUserFormData } from '../../redux/LoginPage/selectors';
import { onFormValueChangeAction } from '../../redux/LoginPage/actions';
import LoginPage from './LoginPage';
import styles from './styles';

const mapStateToProps = createStructuredSelector({
  userFormData: makeSelectUserFormData(),
});

const mapDispatchToProps = dispatch => ({
  handleUserForm: (event, { name, value }) =>
    dispatch(onFormValueChangeAction(name, value)),
});

export default injectIntl(
  withStyles(styles)(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(LoginPage),
  ),
);
