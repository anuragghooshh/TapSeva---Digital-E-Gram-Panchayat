import React from 'react'

interface SelectProps {
    children: React.ReactNode;
    name: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ children, name, id, value, onChange }) => {
    return (
        <select name={name} id={id} value={value} onChange={onChange} className='w-full p-2 border rounded-md'>
            {children}
        </select>
    )
}

export default Select
