import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
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

export class NextButton extends Component {
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

    const className = withBaseClassName('navbar-button', 'next-button')(css);

    return (
      <Icon
        {...props}
        {...{className}}
        onClick={this.handleClick}
      />
    );
  }
}

NextButton.propTypes    = PROP_TYPES;
NextButton.defaultProps = DEFAULT_PROPS;

export default withRouter(NextButton);
