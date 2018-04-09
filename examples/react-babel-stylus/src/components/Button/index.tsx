import * as React from 'react';
import { cx, cn, style } from './style.styl';

interface Props {
  className?: string;
  primary?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: React.SFC<Props> = ({ className, primary, disabled, children }) => {
  const classNames = cx('button', { primary });
  return (
    <button className={cn(className, classNames)} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
