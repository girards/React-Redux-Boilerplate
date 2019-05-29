import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Menu, Image } from 'semantic-ui-react';

export default class Header extends React.PureComponent {
  render() {
    return (
      <Menu>
        <Menu.Item>
          <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            onClick={() => this.props.history.push('/login')}
          />
          <Menu.Item
            name="register"
            onClick={() => this.props.history.push('/signup')}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

Header.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
