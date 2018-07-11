import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withBaseClassName from 'lib/ui/with-base-class-name';

export { ToolbarProvider, withToolbar } from './ToolbarContext';

export const PROP_TYPES = {
  wrapper: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
};

export const DEFAULT_PROPS = {
  wrapper: 'div',
};

export default class Toolbar extends Component {
  render() {
    const {
      wrapper: Wrapper,
      className: css,
      children,
      content,
      ...props
    } = this.props;

    const className = withBaseClassName('toolbar')(css);

    return (
      <Wrapper
        {...props}
        {...{className}}
      >
        {!children && content}
        {children}
      </Wrapper>
    );
  }
}

Toolbar.propTypes    = PROP_TYPES;
Toolbar.defaultProps = DEFAULT_PROPS;
