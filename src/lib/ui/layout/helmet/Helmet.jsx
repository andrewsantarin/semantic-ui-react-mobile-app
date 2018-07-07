import React, { Component } from 'react';
import HelmetComponent from 'react-helmet';

export class Helmet extends Component {
  getTitle = () => {
    const {
      appTitle,
      pageTitle
    } = this.props;

    return [appTitle, pageTitle].filter(str => str).join(' - ');
  }

  render() {
    return (
      <HelmetComponent title={this.getTitle()} />
    );
  }
}

Helmet.defaultProps = {
  appTitle  : '',
  pageTitle : '',
};
