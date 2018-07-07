import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

const MENU_MAP = {

};

export const PROP_TYPES = {
  menuMap: PropTypes.object,
};

export const DEFAULT_PROPS = {
  menuMap: MENU_MAP,
};

export default class AppToolbarMenu extends Component {
  render() {
    const {
      menuMap,
      ...props
    } = this.props;

    const menuMapKeys = Object.keys(menuMap);

    return (
      <Menu
        {...props}
        as="nav"
        borderless
        icon="labeled"
        size="mini"
        widths={menuMapKeys.length}
      >
        {menuMapKeys.map((key) => (
          <Menu.Item
            {...{key}}
            {...linkMap[key]}
            activeClassName="active"
          />
        ))}
      </Menu>
    );
  }
}

AppToolbarMenu.propTypes    = PROP_TYPES;
AppToolbarMenu.defaultProps = DEFAULT_PROPS;
