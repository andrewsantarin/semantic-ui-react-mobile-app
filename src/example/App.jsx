import React, { Component } from 'react';

import { ToolbarProvider } from 'lib/ui/layout/toolbar/Toolbar';

import 'example/App.css';
import AppToolbarMenu from 'example/AppToolbarMenu';
import AppView from 'example/AppView';
import AnimatedSwitchDemo from './AnimatedSwitchDemo';

export default class App extends Component {
  render() {
    return (
      <ToolbarProvider value={{ content: <AppToolbarMenu /> }}>
        <AppView>
          <AnimatedSwitchDemo />
        </AppView>
      </ToolbarProvider>
    );
  }
}
