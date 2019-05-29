/**
 *
 * Header
 *
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';

import { createStructuredSelector } from 'reselect';
import makeSelectHeader from '../../redux/Header/selectors';
import Header from './Header';
import styles from './styles';

const mapStateToProps = createStructuredSelector({
  header: makeSelectHeader(),
});

function mapDispatchToProps() {
  return {};
}

export default withStyles(styles)(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(Header),
  ),
);
