import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Container, Segment } from 'semantic-ui-react';

import Helmet from 'lib/ui/layout/helmet/Helmet';
import Navbar from 'lib/ui/layout/navbar/Navbar';
import Toolbar from 'lib/ui/layout/toolbar/Toolbar';

export default class Page extends Component {
  render() {
    const {
      // helmet
      appTitle,
      pageTitle,

      // navbar
      hideNavbar,
      backButton,
      userButton,

      // toolbar
      hideToolbar,
      toolbarProps,
      ...props
    } = this.props;

    const helmetProps = {
      appTitle,
      pageTitle,
    };

    const navbarProps = {
      backButton,
      userButton,
      appTitle,
      pageTitle,
    };

    const toolbarProps = {
      content : toolbarContent,
      wrapper : toolbarWrapper,
    };

    return (
      <div className="page">
        <Helmet {...helmetProps} />

        {!hideNavbar && (
          <Navbar {...navbarProps} />
        )}

        <main>
          {children}
        </main>

        {!hideToolbar && (
          <Toolbar {...toolbarProps} />
        )}
      </div>
    );
  }
}
