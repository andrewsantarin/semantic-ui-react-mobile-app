import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';
import { Icon } from 'semantic-ui-react';

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
    return this.props.lastLocation || {};
  }

  goBack = () => {
    const {
      history,
      absolutePath,
    } = this.props;

    // Retrieve last known location within the app.
    const { pathname } = this.getLastLocation();

    // If there is no last known location, push the absolute path instead.
    if (!!absolutePath && !pathname) {
      history.push(absolutePath);
      return;
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

      // react-router-last-location
      lastLocation,

      // semantic-ui-react
      ...props
    } = this.props;

    return (
      <Icon
        {...props}
        onClick={this.handleClick}
      />
    );
  }
}

BackButton.propTypes    = PROP_TYPES;
BackButton.defaultProps = DEFAULT_PROPS;

export default compose(
  withRouter,
  withLastLocation
)(BackButton);
