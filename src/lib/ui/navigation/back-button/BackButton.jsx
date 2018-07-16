import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import withBaseClassName from 'lib/ui/with-base-class-name';
import lastLocationIsParent from 'lib/ui/navigation/last-location-is-parent';
import lastLocationIsSibling from 'lib/ui/navigation/last-location-is-sibling';

export const PROP_TYPES = {
  link : PropTypes.bool,
  name : PropTypes.string,
  size : PropTypes.string,
};

export const DEFAULT_PROPS = {
  link : true,
  name : 'arrow left',
  size : 'large',
};

export class BackButton extends Component {
  getLastLocation = () => {
    const { state = {} } = this.props.location;
    const { lastLocation } = state;

    return lastLocation;
  }

  useFallback = () => {
    const { fallbackPath } = this.props;
    const { pathname: lastLocationPathname } = this.getLastLocation() || {};
    const hasLastLocation = !!lastLocationPathname;
    const hasFallbackPath = !!fallbackPath;

    return !hasLastLocation && hasFallbackPath;
  }

  goBackIsAllowed = () => {
    const {
      location,
      fallbackPath,
    } = this.props;
    const { pathname: lastLocationPathname } = this.getLastLocation() || {};
    const hasLastLocation = !!lastLocationPathname;
    const hasFallbackPath = !!fallbackPath;

    // Retrieve last known location within the app.
    // If there is no last known location, push the absolute path instead.
    if (!hasLastLocation && hasFallbackPath) {
      return true;
    }

    if (!hasLastLocation && !hasFallbackPath) {
      return false;
    }

    const { pathname: currentLocationPathname } = location;
    const isLastLocationParent = lastLocationIsParent(lastLocationPathname, currentLocationPathname);
    const isLastLocationSibling = lastLocationIsSibling(lastLocationPathname, currentLocationPathname);

    const isGoBackAllowed = isLastLocationParent || isLastLocationSibling;

    return isGoBackAllowed;
  }

  goBack = () => {
    const {
      history,
      location,
      fallbackPath,
    } = this.props;

    const { pathname: lastLocationPathname } = this.getLastLocation();
    const hasLastLocation = !!lastLocationPathname;
    const hasFallbackPath = !!fallbackPath;

    // If there is no last known location, push the absolute path instead.
    if (!hasLastLocation && hasFallbackPath) {
      history.push(fallbackPath);
    }

    // Go backwards.
    history.goBack();
  }

  handleClick = (event) => {
    this.goBack();
  }

  render() {
    const {
      // react-router
      staticContext,
      history,
      location,
      match,

      // semantic-ui-react
      className: css,

      ...props
    } = this.props;

    const className = withBaseClassName('navbar-button', 'back-button')(css);
    const isGoBackAllowed = this.goBackIsAllowed();

    if (!isGoBackAllowed) {
      return null;
    }

    return (
      <Icon
        {...props}
        {...{className}}
        onClick={this.handleClick}
      />
    );
  }
}

BackButton.propTypes    = PROP_TYPES;
BackButton.defaultProps = DEFAULT_PROPS;

export default withRouter(BackButton);
