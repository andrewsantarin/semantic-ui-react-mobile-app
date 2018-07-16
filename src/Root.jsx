import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ToolbarProvider } from 'lib/ui/layout/toolbar/Toolbar';

import App from 'example/App';
import AppToolbarMenu from 'example/AppToolbarMenu';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <ToolbarProvider value={{ isContainer: true, content: <AppToolbarMenu /> }}>
          <App {...this.props} />
        </ToolbarProvider>
      </BrowserRouter>
    );
  }
}
