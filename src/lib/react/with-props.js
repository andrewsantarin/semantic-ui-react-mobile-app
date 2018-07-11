import React, { Component } from 'react';

export default function withProps(newProps) {
  return function enhanceComponent(EnhanceableComponent) {
    class WithProps extends Component {
      render() {
        return (
          <EnhanceableComponent {...this.props} {...newProps} />
        );
      }
    }

    WithProps.displayName = `withProps(${getDisplayName(EnhanceableComponent)})`;

    return WithProps;
  }
}
