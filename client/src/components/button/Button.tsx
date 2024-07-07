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

const Button = ({ children, design, color, type, onClick, onSubmit, link=false, path }: ButtonProps) => {

  if (link) {
    return (
      <Link to={path ? path : '/'} className={
        `px-6 py-3 min-w-28 rounded-md flex w-fit ${design && color ? buttonDesign[`${design}_${color}`] :
          design ? buttonDesign[design] : color ? buttonDesign[color] : 'bg-dark text-light'
        } `
      }>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={
        `px-6 py-3 min-w-28 rounded-md ${design && color ? buttonDesign[`${design}_${color}`] :
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
