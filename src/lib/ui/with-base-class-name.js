import classNames from 'classnames';

export default function withBaseClassName(...baseClassNames) {
  return function enhanceClassName(className) {
    const enhancedClassName = classNames(...baseClassNames, {
      [className]     : !!className,
    });

    return enhancedClassName;
  }
}
