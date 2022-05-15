import { MouseEventHandler } from 'react';
import styles from './cbutton.module.scss';
import classLister from '../utils/classLister';

/*
    TODO:
      Add a way to add any event listener to the button
      such as it was done for the `onClick` event
  */

interface Props {
  children: Element | JSX.Element | string;
  color?: string;
  size?: string;
  filled?: boolean;
  classes?: string[],
  block?: boolean,
  rounded?: boolean,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  // eslint-disable-next-line react/require-default-props
  type: 'button' | 'submit' | 'reset',
}

function CButton({
  // Define default props here
  children,
  classes = [],
  color,
  size,
  filled,
  rounded,
  block,
  onClick,
  type,
}: Props): JSX.Element {
  const computedClasses: (string | boolean)[] = [
    'c-button',
    !!rounded && 'rounded',
    !!block && 'block',
    color === 'green' && 'green',
    color === 'grey' && 'grey',
    size === 'xs' && 'extra-small',
    size === 's' && 'small',
    size === 'm' && 'medium',
    size === 'l' && 'large',
    size === 'xl' && 'extra-large',
    !filled && 'transparent',
    !!filled && 'filled',
  ];

  const componentClasses: (...classList: string[]) => string = classLister(styles);

  return (
    <button
      className={`${classes.join(' ')} ${componentClasses(...computedClasses as string[])}`}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
    >
      <span className="btn-content">
        {children}
      </span>
    </button>
  );
}

CButton.defaultProps = {
  color: 'green',
  size: 'm',
  filled: false,
  rounded: false,
  block: false,
  classes: [],
  onClick: null,
  // eslint-disable-next-line react/default-props-match-prop-types
  type: 'button',
};

export default CButton;
