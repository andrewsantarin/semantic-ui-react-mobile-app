import React from 'react';

/**
 * The callback `eventHandlerCallback` consumes and evaluates an event value.
 *
 * @callback mapPropsToChild
 * @param {*} child - A React element.
 * @param {int} index - Array index number.
 */

/**
 * Maps custom props to children.
 * 
 * @param {*} children - React component children.
 * @param {} mapPropsToChild - Component prop enhancer callback, passing a child and an index number.
 */
export default function mapPropsToChildren(children, mapPropsToChild) {
  const hasPropMap = typeof mapPropsToChild === 'function';
  const enhancedChildren = [];

  React.Children.forEach(children, (child, index) => {
    // Simply push any child that is not a React element.
    // https://stackoverflow.com/a/46772324/1933636
    if (!React.isValidElement(child)) {
      enhancedChildren.push(child);
      return;
    }

    // Add props to the React child element first before pushing the child.
    // https://stackoverflow.com/a/48200614/1933636
    enhancedChildren.push(
      React.cloneElement(
        child,
        hasPropMap ? mapPropsToChild(child, index) : {}
      )
    )
  });

  return enhancedChildren;
}
