import React, { Component } from 'react';

import Toolbar, { withToolbar } from 'lib/ui/layout/toolbar/Toolbar';

export class AppView extends Component {
  render() {
    const { toolbarProps, children } = this.props;

    return (
      <div className="view">
        {children}
        <Toolbar {...toolbarProps} />
      </div>
    );
  }
}

export default withToolbar(AppView);
