import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import { ToolbarProvider } from 'lib/ui/layout/toolbar/Toolbar';

import App from 'example/App';
import AppToolbarMenu from 'example/AppToolbarMenu';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <LastLocationProvider>
          <ToolbarProvider value={{ isContainer: true, content: <AppToolbarMenu /> }}>
            <App {...this.props} />
          </ToolbarProvider>
        </LastLocationProvider>
      </BrowserRouter>
    );
  }
}
