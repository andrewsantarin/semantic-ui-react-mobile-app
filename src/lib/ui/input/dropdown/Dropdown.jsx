import React, { Component, Fragment } from 'react';
import { Dropdown as DropdownComponent, Portal } from 'semantic-ui-react';

import isMobile from 'lib/ui/is-mobile';

import DropdownBackdrop from './DropdownBackdrop';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.classNamesToRemove = ['active', 'visible'];
    this.isMobile = isMobile();
    this.state = {
      open: false,
    };
  }

  setOpen = (open) => {
    this.setState((prevState, props) => ({
      open,
    }));
  }

  setRef = (node) => {
    this.dropdown = node;
  }

  handleOpen = (...args) => {
    this.setOpen(true);
    const { onOpen } = this.props;
    onOpen && onOpen(...args);
  }

  handleClose = (...args) => {
    this.setOpen(false);
    const { onClose } = this.props;
    onClose && onClose(...args);
  }

  createDummyClassName = (classNames) => {
    let baseCss = classNames;
    this.classNamesToRemove.forEach((str) => {
      baseCss = baseCss.replace(str, '');
    });
    baseCss = baseCss.trim();
    const className = `${baseCss} dropdown--dummy`;

    return className;
  }

  createDummy = () => {
    if (!this.dropdown) {
      return null;
    }

    const dummy = this.dropdown.ref.cloneNode(true);
    dummy.removeChild(dummy.lastElementChild);
    dummy.className = this.createDummyClassName(dummy.className);

    return {
      className : dummy.className,
      innerHTML : dummy.innerHTML,
      component : dummy.tagName.toLowerCase(),
    };
  }

  render() {
    // Render without fallback on non-mobile devices.
    if (!this.isMobile) {
      return (
        <DropdownComponent
          {...this.props}
          onOpen={this.handleOpen}
          onClose={this.handleClose}
        />
      );
    }

    // We have to control the open/close state programatically.
    const { open } = this.state;

    // Create a carbon copy of the element.
    // Ideally, hide it via external style.
    const dummy = open && this.createDummy();

    // Render the original dropdown within its expected document position when it's "closed".
    // When it's "opened", render instead in a <Portal> component.
    //
    // Absolutely necessary because of how a child's "position: fixed;" works relative to its parent's position
    // and because of how semantic-ui-react generates the list when opened (not in a portal).
    //
    // Oh, and make sure to render the dummy component, too, because the whole element will be put in the <Portal>.
    return (
      <Fragment>
        {dummy && (
          <Fragment>
            <dummy.component
              className={dummy.className}
              dangerouslySetInnerHTML={{ __html: dummy.innerHTML }}
            />
            <DropdownBackdrop />
          </Fragment>
        )}
        {!open && (
          <DropdownComponent
            {...this.props}
            ref={this.setRef}
            onOpen={this.handleOpen}
            onClose={this.handleClose}
          />
        )}
        {open && (
          <Portal {...{open}}>
            <DropdownComponent
              {...this.props}
              {...{open}}
              ref={this.setRef}
              onOpen={this.handleOpen}
              onClose={this.handleClose}
            />
          </Portal>
        )}
      </Fragment>
    );
  }
}
