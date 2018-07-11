import React, { Component } from 'react';

import Repeater from './Repeater';

export const PATH = '/pricing';

export default class Pricing extends Component {
  render() {
    return (
      <Repeater text="Pricing" />
    );
  }
}
