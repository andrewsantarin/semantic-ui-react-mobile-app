import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export { Provider, withToolbar } from './ToolbarContext';

export const PROP_TYPES = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
};

export const DEFAULT_PROPS = {
  as: 'div',
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
    const className = classNames('toolbar', {
      [css]: !!css,
    });

    return (
      <Wrapper
        {...props}
        {...{className}}
      >
        {this.props.children}
      </Wrapper>
    );
  }
}

Toolbar.propTypes    = PROP_TYPES;
Toolbar.defaultProps = DEFAULT_PROPS;
