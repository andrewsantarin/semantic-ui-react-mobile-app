import React, { Component } from 'react';
import { NavLink as NavLinkComponent, withRouter } from 'react-router-dom';

import mapLastLocationToState from 'lib/ui/navigation/map-last-location-to-state';

export class NavLink extends Component {
  render() {
    const {
      to,
      ...props
    } = this.props;

    return (
      <NavLinkComponent
        {...props}
        to={mapLastLocationToState(this.props.location, to)}
      />
    );
  }
}

export default withRouter(NavLink);
