import React, { Fragment } from 'react';
import Ink from 'react-ink';

export default function InkFragment(props) {
  const {
    children,
    ...rest
  } = props;

  return (
    <Fragment>
      <Ink {...rest} />
      {children}
    </Fragment>
  );
}
