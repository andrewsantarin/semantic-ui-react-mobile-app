import React, { Fragment } from 'react';

const LENGTH = 100;

export function hundredTimes() {
  return Array.from({ length: LENGTH }, (x, i) => i);
}

export default function Repeater(props) {
  const { text } = props;

  return (
    <Fragment>
      {hundredTimes().map((key) => (
        <div {...{key}}>{text}</div>
      ))}
    </Fragment>
  );
}
