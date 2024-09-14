import { FC } from 'react';

export interface IButtonProps {
  onClick: () => void;
  children: string | JSX.Element;
  className?: string;
}

export const Button: FC<IButtonProps> = ({ onClick, children, className = "" }) => {
  return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
  );
};