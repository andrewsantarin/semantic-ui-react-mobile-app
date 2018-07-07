import React, { Component } from 'react';

import Toolbar from './Toolbar';

export class AppPage extends Component {
  render() {
    const { toolbarProps } = this.props;
    return (
      <div>
        <Toolbar {...toolbarProps} />
      </div>
    );
  }
}

export default withToolbar(AppPage);
