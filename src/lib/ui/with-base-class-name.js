import classNames from 'classnames';

export default function withBaseClassName(baseClassName) {
  return function enhanceClassName(className) {
    const enhancedClassName = classNames({
      [baseClassName] : !!baseClassName,
      [className]     : !!className,
    });

    return enhancedClassName;
  }
}
