import React, { Component } from 'react';
import { Link as LinkComponent } from 'react-router-dom';

import mapLastLocationToState from 'lib/navigation/map-last-pathname-to-state';

export default class Link extends Component {
  render() {
    const {
      to,
      ...props
    } = this.props;

    return (
      <LinkComponent
        {...props}
        to={mapLastLocationToState(this.props.location, to)}
      />
    );
  }
}

export default withRouter(Link);
