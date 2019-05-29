/**
 *
 * HomePage
 *
 */
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import HomePage from './HomePage';
import makeSelectHomePage from '../../redux/HomePage/selectors';

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
