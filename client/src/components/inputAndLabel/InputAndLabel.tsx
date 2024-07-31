import React from 'react'

// InputAndLabel interface
interface ApexInterface {
  placeholder?: string;
  id?: string;
  name?: string;
  required?: boolean;
  value?: string;
  disabled?: boolean;
  htmlFor?: string;
}

// Label interface
interface LabelProps extends ApexInterface {
  children: React.ReactNode
}

// Label component
const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return (
    <>
      <label
        className="block font-work text-base font-regular text-dark"
        htmlFor={htmlFor}
      >
        {children}
      </label>
    </>
  )
}


// Input interface
interface InputProps extends ApexInterface {
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Input component
const Input: React.FC<InputProps> = ({ type, placeholder, id, name, required=false, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className="block rounded-sm w-full font-work text-dark py-3 px-4 sm:px-6 lg:px-7 bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    />
  )
}

// TextArea Interface

interface TextAreaProps extends ApexInterface {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

// TextArea Component
const TextArea: React.FC<TextAreaProps> = ({ placeholder, id, name, required, value, onChange }) => {
  return (
    <textarea
      placeholder={placeholder}
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className="block w-full font-work text-dark py-3 px-4 sm:px-6 lg:px-7 bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    />
  )
}


// Option Component
interface OptionProps extends ApexInterface {
  children: React.ReactNode
}

const Option: React.FC<OptionProps> = ({ children, value, disabled }) => {
  return (
    <option
      value={value}
      disabled={disabled ? disabled === true : false}
      className="text-dark font-work py-2 px-3 sm:py-3 sm:px-5 lg:py-5 lg:px-7 bg-light"
    >
      {children}
    </option>
  )
}


// Select component

interface SelectProps extends ApexInterface {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode
}

const Select: React.FC<SelectProps> & { Option: React.FC<OptionProps> } = ({ children, name, id, value, onChange }) => {
  return (
    <select
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className="w-full rounded-sm font-work text-dark py-3 px-4 sm:px-6 lg:px-7 bg-gray-100 border border-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    >
      {children}
    </select>
  )
}

Select.Option = Option;


// Compound component interface
interface CompoundProps extends ApexInterface {
  children: React.ReactNode;
}

// Compund component
const InputAndLabel: React.FC<CompoundProps> & {
  Label: React.FC<LabelProps>,
  Input: React.FC<InputProps>,
  TextArea: React.FC<TextAreaProps>,
  Select: React.FC<SelectProps> & { Option: React.FC<OptionProps> }
} = ({ children }) => {
  return (
    <div className='space-y-2 relative'>
      {children}
    </div>
  )
}

InputAndLabel.Label = Label;
InputAndLabel.Input = Input;
InputAndLabel.TextArea = TextArea;
InputAndLabel.Select = Select;

export default InputAndLabel;