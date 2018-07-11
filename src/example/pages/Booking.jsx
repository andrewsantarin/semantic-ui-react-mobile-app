import React, { Component } from 'react';

import Repeater from './Repeater';

export const PATH = '/booking';

export default class Booking extends Component {
  render() {
    return (
      <Repeater text="Booking" />
    );
  }
}
