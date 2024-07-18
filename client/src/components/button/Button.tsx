import React from 'react';
import { buttonDesign } from './buttonDesign';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  children: React.ReactNode;
  design?: 'stroked' | 'filled';
  color?: 'dark' | 'light' | 'color';
  type?: "button" | "submit" | "reset" | undefined;
  link?: boolean;
  path?: string;
  onClick?: () => void;
  onSubmit?: (e: any) => void;
}

const commonBtnStyle = 'px-6 min-h-14 min-w-36 flex items-center justify-center gap-2 font-regular text-base';

const Button = ({ children, design, color, type, onClick, onSubmit, link = false, path }: ButtonProps) => {

  if (link) {
    return (
      <Link to={path ? path : '/'}
        className={
          `${commonBtnStyle} ${design && color ? buttonDesign[`${design}_${color}`] :
            design ? buttonDesign[design] : color ? buttonDesign[color] : 'bg-dark text-light'
          } `
        }
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={
        `${commonBtnStyle} ${design && color ? buttonDesign[`${design}_${color}`] :
          design ? buttonDesign[design] : color ? buttonDesign[color] : 'bg-dark text-light'
        } `
      }
      type={type ? type : 'button'}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {children}
    </button>
  );
};

export default Button;
