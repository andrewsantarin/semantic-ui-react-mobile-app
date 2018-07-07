import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

import BackButton from 'lib/ui/back-button/BackButton';
import UserButton from 'lib/ui/user-button/UserButton';

export default class Navbar extends Component {
  render() {
    const {
      backButton,
      userButton,

      title,
    } = this.props;
    return (
      <nav className="navbar">
        <Menu>
          {backButton && (
            <Menu.Item className="left">
              <BackButton />
            </Menu.Item>
          )}

          <Menu.Item className="title">
            {title}
          </Menu.Item>
          
          {userButton && (
            <Menu.Menu className="right" position="right">
              <UserButton />
            </Menu.Menu>
          )}
        </Menu>
      </nav>
    );
  }
}
