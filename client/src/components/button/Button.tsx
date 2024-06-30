import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className='px-6 py-3 bg-dark text-light'>
      {children}
    </button>
  );
};

export default Button;
