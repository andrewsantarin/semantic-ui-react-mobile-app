import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

import InkFragment from 'lib/ui/ink/InkFragment';
import NavLink from 'lib/ui/navigation/link/NavLink';

import { PATH as BOOKING_PATH } from './pages/Booking';
import { PATH as CHAT_PATH } from './pages/Chat';
import { PATH as ORDERS_PATH } from './pages/Orders';
import { PATH as PRICING_PATH } from './pages/Pricing';
import { PATH as PROFILE_PATH } from './pages/Profile';

export const MENU_MAP = {
  [ORDERS_PATH]: {
    as: NavLink,
    icon: 'truck',
    content: 'Orders',
    to: ORDERS_PATH,
  },
  [PRICING_PATH]: {
    as: NavLink,
    icon: 'dollar',
    content: 'Pricing',
    to: PRICING_PATH,
  },
  [BOOKING_PATH]: {
    as: NavLink,
    icon: 'plus',
    content: 'Pickup',
    to: BOOKING_PATH,
  },
  [CHAT_PATH]: {
    as: NavLink,
    icon: 'chat',
    content: 'Chat',
    to: CHAT_PATH,
  },
  [PROFILE_PATH]: {
    as: NavLink,
    icon: 'user',
    content: 'Profile',
    to: PROFILE_PATH,
  },
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
      location,
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
            {...menuMap[key]}
            content={(
              <InkFragment children={menuMap[key].content} />
            )}
          />
        ))}
      </Menu>
    );
  }
}

AppToolbarMenu.propTypes    = PROP_TYPES;
AppToolbarMenu.defaultProps = DEFAULT_PROPS;
