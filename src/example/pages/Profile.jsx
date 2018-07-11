import React, { Component } from 'react';

import Repeater from './Repeater';

export const PATH = '/profile';

export default class Profile extends Component {
  render() {
    return (
      <Repeater text="Profile" />
    );
  }
}
