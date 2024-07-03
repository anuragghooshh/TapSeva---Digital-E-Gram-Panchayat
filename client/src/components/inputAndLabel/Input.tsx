import React from 'react'

export interface InputProps {
    type: string;
    placeholder: string;
    id: string;
    name: string;
    required: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, id, name, required, value }) => {
    return (
        <input   
            type='text'
            placeholder={placeholder}
            id={id}
            name={name}
            required={required}
            value={value}
            className='mt-1 block w-full py-2 px-4 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
        />
    )
}


export default Input
