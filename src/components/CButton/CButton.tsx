import styles from './cbutton.module.scss';
import classLister from '../utils/classLister';
import { MouseEventHandler } from 'react';

  /*
    TODO:
      Add a way to add any event listener to the button
      such as it was done for the `onClick` event
  */

type Props = {
  children: Element | JSX.Element;
  color?: string;
  size?: string;
  filled?: boolean;
  classes?: string[],
  block?: boolean,
  rounded?: boolean,
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
}

function CButton({
  // Define default props here
  children,
  classes = [],
  color = 'green',
  size = 'm',
  filled = false,
  rounded = false,
  block = false,
  onClick
}: Props): JSX.Element {
  const computedClasses: (string | boolean)[] = [
    'c-button',
    rounded && 'rounded',
    block && 'block',
    color === 'green' && 'green',
    color === 'grey' && 'grey',
    size === 'xs' && 'extra-small',
    size === 's' && 'small',
    size === 'm' && 'medium',
    size === 'l' && 'large',
    size === 'xl' && 'extra-large',
    !filled && 'transparent',
    filled && 'filled',
  ];

  const componentClasses: (...classList: string[]) => string = classLister(styles);

  return (
    <button
      className={classes.join(' ') + " " + componentClasses(...computedClasses as string[])}
      onClick={onClick}
    >
      <span className="btn-content">
        {children}
      </span>
    </button>
  )
}

export default CButton
