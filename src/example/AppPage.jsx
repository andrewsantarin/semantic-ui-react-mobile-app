import React, { Component } from 'react';
import getDisplayName from 'recompose/getDisplayName';
import wrapDisplayName from 'recompose/wrapDisplayName';

import Navbar from 'lib/ui/layout/navbar/Navbar';
import Toolbar, { withToolbar } from 'lib/ui/layout/toolbar/Toolbar';
import Dropdown from 'lib/ui/input/dropdown/Dropdown';

import AppButton from './AppButton';
import AppToolbarMenu from 'example/AppToolbarMenu';

export function withAppPage({ baseUrl, ...pageProps }) {
  return function renderWithModalRouteContainer(ComposedComponent) {
    class WithAppPage extends Component {
      render() {
        return (
          <AppPage {...pageProps}>
            <ComposedComponent
              {...this.props}
              {...{baseUrl}}
            />
          </AppPage>
        );
      }
    }

    const displayName = wrapDisplayName(getDisplayName(ComposedComponent), 'withAppPage');
    WithAppPage.displayName = displayName;

    return WithAppPage;
  }
}

export default class AppPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="page">
        <Navbar
          menuProps={{
            borderless: true,
          }}
          backButton
          userButton
          title="App"
          wrapper="nav"
        />

        <main className="page-content">
          {children}
        </main>
      </div>
    );
  }
}
