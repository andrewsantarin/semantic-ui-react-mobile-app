import React, { Component } from 'react';

import Navbar from 'lib/ui/layout/navbar/Navbar';
import Toolbar, { withToolbar } from 'lib/ui/layout/toolbar/Toolbar';
import Dropdown from 'lib/ui/input/dropdown/Dropdown';
import getDisplayName from 'lib/react/get-display-name';

import AppButton from './AppButton';
import AppToolbarMenu from 'example/AppToolbarMenu';

export function withAppPage({ baseUrl, ...pageProps }) {
  return function renderWithModalRouteContainer(EnhanceableComponent) {
    class WithAppPage extends Component {
      render() {
        return (
          <AppPage {...pageProps}>
            <EnhanceableComponent
              {...this.props}
              {...{baseUrl}}
            />
          </AppPage>
        );
      }
    }

    const displayName = `withAppPage(${getDisplayName(EnhanceableComponent)})`;
    WithAppPage.displayName = displayName;

    return WithAppPage;
  }
}

export default class AppPage extends Component {
  render() {
    const { toolbarProps, children } = this.props;

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
        {/*
        <div style={{ margin: '10vh 0' }} />
        <AppButton />
        <div style={{ margin: '10vh 0' }} />
        <Dropdown
          selection
          header="Choose one of these options"
          placeholder="Choose one of these options"
          options={[
            {
              key: 1,
              value: 1,
              text: 'This is an option',
            },
            {
              key: 2,
              value: 2,
              text: 'This is an option',
            },
          ]}
        />
        */}

        <main className="page-content">
          {children}
        </main>
      </div>
    );
  }
}
