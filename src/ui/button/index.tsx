import { FC } from 'react';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element;
  className?: string;
}

export const Button: FC<IButtonProps> = ({ children, className = "", ...props }) => {
  return (
      <button {...props} className={className}>
        {children}
      </button>
  );
};