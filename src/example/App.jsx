import React, { Component } from 'react';

import { ToolbarProvider } from 'lib/ui/toolbar/Toolbar';

import AppToolbarMenu from 'example/AppToolbarMenu';
import AppPage from 'example/Page';

export default class App extends Component {
  render() {
    return (
      <div>
        <ToolbarProvider value={{ content: <AppToolbarMenu /> }}>
          <AppPage />
        </ToolbarProvider>
      </div>
    );
  }
}
