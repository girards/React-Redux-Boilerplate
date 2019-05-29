/**
 *
 * NotFoundPage
 *
 */
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import NotFoundPage from './NotFoundPage';

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotFoundPage);
