import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import { ToolbarProvider } from 'lib/ui/toolbar/toolbar-context';

import App from 'example/App';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <LastLocationProvider>
          <ToolbarProvider value={{ isContainer: true, content: <ToolbarMenu /> }}>
            <App {...props} />
          </ToolbarProvider>
        </LastLocationProvider>
      </BrowserRouter>
    );
  }
}
