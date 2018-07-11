import React, { Component } from 'react';

import Repeater from './Repeater';

export const PATH = '/chat';

export default class Chat extends Component {
  render() {
    return (
      <Repeater text="Chat" />
    );
  }
}
