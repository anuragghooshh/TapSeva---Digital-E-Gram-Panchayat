import React from 'react'

export interface LabelProps {
    children: React.ReactNode;
    htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
    return (
        <label
            className='block font-work text-base text-dark'
            htmlFor={htmlFor}
        >
            {children}
        </label>
    )
}

export default Label
