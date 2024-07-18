import React from 'react'

// Label component

interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return (
    <label
      className='block font-work text-base font-regular text-dark uppercase'
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}

// Input component

interface InputProps {
  type: string;
  placeholder: string;
  id: string;
  name: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, id, name, required, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className='block w-full font-work text-dark py-5 px-7 bg-gray borderfocus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
    />
  )
}


// Option Component

interface OptionProps {
  children: React.ReactNode;
  value: string;
  disabled? : boolean
}

const Option: React.FC<OptionProps> = ({ children, value, disabled }) => {
  return (
    <option value={value} disabled={disabled ? disabled === true : false} className='text-dark font-work py-5 px-7 bg-light'>
      {children}
    </option>
  )
}


// Select component

interface SelectProps {
  children: React.ReactNode;
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> & { Option: React.FC<OptionProps> } = ({ children, name, id, value, onChange }) => {
  return (
    <select name={name} id={id} value={value} onChange={onChange} className='w-full p-2 font-work text-dark py-5 px-7 bg-gray  border border-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'>
      {children}
    </select>
  )
}

Select.Option = Option;

// Compund component

interface InputAndLabelProps {
  children: React.ReactNode
}

const InputAndLabel: React.FC<InputAndLabelProps> & {
  Label: React.FC<LabelProps>,
  Input: React.FC<InputProps>,
  Select: React.FC<SelectProps> & { Option: React.FC<OptionProps> }
} = ({ children }) => {
  return (
    <div className='space-y-2'>
      {children}
    </div>
  )
}

InputAndLabel.Label = Label;
InputAndLabel.Input = Input;
InputAndLabel.Select = Select;

export default InputAndLabel;