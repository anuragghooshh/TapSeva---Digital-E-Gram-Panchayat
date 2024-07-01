import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const buttonDesign = {
  stroked : 'border border-gray-800',
  filled : 'bg-primary text-light',
}

const buttonColors = {
  dark: 'bg-dark text-light',
  light: 'bg-light text-dark',
  color: 'bg-primary text-light',
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className='px-6 py-3 bg-dark text-light'>
      {children}
    </button>
  );
};

export default Button;
