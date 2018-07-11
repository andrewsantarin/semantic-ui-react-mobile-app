import React, { Component } from 'react';

import Repeater from './Repeater';

export const PATH = '/orders';

export default class Orders extends Component {
  render() {
    return (
      <Repeater text="Orders" />
    );
  }
}
