import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

import withBaseClassName from 'lib/ui/with-base-class-name';
import BackButton from 'lib/ui/navigation/back-button/BackButton';
import UserButton from 'lib/ui/navigation/user-button/UserButton';

export const PROP_TYPES = {
  wrapper: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
};

export const DEFAULT_PROPS = {
  wrapper: 'div',
};

export default class Navbar extends Component {
  render() {
    const {
      wrapper: Wrapper,
      className: css,
      backButton,
      userButton,
      title,

      // semantic-ui-react
      menuProps,
      ...props
    } = this.props;

    const className = withBaseClassName('navbar')(css);

    return (
      <Wrapper
        {...props}
        {...{className}}
      >
        <Menu {...menuProps}>
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
              <Menu.Item className="right">
                <UserButton />
              </Menu.Item>
            </Menu.Menu>
          )}
        </Menu>
      </Wrapper>
    );
  }
}

Navbar.propTypes    = PROP_TYPES;
Navbar.defaultProps = DEFAULT_PROPS;
