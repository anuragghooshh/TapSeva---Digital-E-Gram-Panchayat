import React, { ReactNode } from 'react';
import { buttonDesign } from './buttonDesign';

export interface ButtonProps {
  children: ReactNode;
  design?: 'stroked' | 'filled';
  color?: 'dark' | 'light' | 'color';
  type?: "button" | "submit" | "reset" | undefined
}

const Button = ({ children, design, color, type }: ButtonProps) => {
  return (
    <button
      className={
        `px-6 py-3 min-w-28 rounded-md ${design && color ? buttonDesign[`${design}_${color}`] :
          design ? buttonDesign[design] : color ? buttonDesign[color] : 'bg-dark text-light'
        } `}
      type={type ? type : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
