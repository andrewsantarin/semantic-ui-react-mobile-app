import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import withBaseClassName from 'lib/ui/with-base-class-name';

export const PROP_TYPES = {
  link : PropTypes.bool,
  name : PropTypes.string,
  size : PropTypes.string,
};

export const DEFAULT_PROPS = {
  link : true,
  name : 'arrow right',
  size : 'large',
};

export class UserButton extends Component {
  getLastLocation = () => {
    return this.props.lastLocation || {};
  }

  goForward = () => {
    const { history } = this.props;

    // Go forwards.
    history.goForward();
  }

  handleClick = (event) => {
    this.goForward();
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

    const className = withBaseClassName('navbar-button user-button')(css);

    return (
      <Icon
        {...props}
        {...{className}}
        onClick={this.handleClick}
      />
    );
  }
}

UserButton.propTypes    = PROP_TYPES;
UserButton.defaultProps = DEFAULT_PROPS;

export default withRouter(UserButton);
