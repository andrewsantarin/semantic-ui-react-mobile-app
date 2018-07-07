import React, { Component, createContext } from 'react';

import getDisplayName from 'lib/react/get-display-name';

export const DEFAULT_VALUE = {
  context     : null,
  children    : null,
  isContainer : false,
}

const ToolbarContext = createContext(DEFAULT_VALUE);

export const ToolbarProvider = ToolbarContext.Provider;
export function withToolbar(ToolbarComponent) {
  class ToolbarContainer extends Component {
    getToolbarProps = ({ isContainer, ...toolbarProps }) => {
      return !!isContainer ? toolbarProps : {
        toolbarProps,
      };
    }

    render() {
      return (
        <ToolbarContext.Consumer>
          {(props) => (
            <ToolbarComponent
              {...this.props}
              {...this.getToolbarProps(props)}
            />
          )}
        </ToolbarContext.Consumer>
      );
    }
  }

  const displayName = `withToolbar(${getDisplayName(ToolbarComponent)})`;
  ToolbarContainer.displayName = displayName;

  return ToolbarContainer;
}
