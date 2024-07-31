import React from 'react';
import { buttonDesign } from './buttonDesign';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  children: React.ReactNode;
  design?: 'stroked' | 'filled';
  color?: 'dark' | 'light' | 'color' | 'negative' | 'positive' | 'disabled';
  type?: "button" | "submit" | "reset" | undefined;
  link?: boolean;
  path?: string;
  onClick?: () => void;
  onSubmit?: (e: any) => void;
}

const Button = ({ children, design, color, type, onClick, onSubmit, link = false, path }: ButtonProps) => {
  const buttonStyle = `${design && color ? buttonDesign[`${design}_${color}`] : design ? buttonDesign[design] : color ? buttonDesign[color] : 'bg-dark text-light-100'}`;

  if (link) {
    return (
      <Link to={path ? path : '/'} className={buttonStyle} title='Redirects' replace={true}> 
        <div className='px-3 py-3 md:px-4 flex items-center justify-center gap-2'>
          {children}
        </div>
      </Link>
    );
  }

  return (
    <button className={buttonStyle} type={type ? type : 'button'} onClick={onClick} onSubmit={onSubmit}>
      <div className='px-3 py-3 md:px-4 flex items-center justify-center gap-2'>
        {children}
      </div>
    </button>
  );
};

export default Button;
