import React from 'react'

// Input interface

interface Input {
  type: string;
  placeholder: string;
  id: string;
  name: string;
  required: boolean;
  value: string;
  disabled?: boolean;
}

// Label component
interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return (
    <label
      className="block font-work text-base md:text-lg lg:text-xl font-regular text-dark uppercase"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}

// Input component

interface InputProps extends Input {
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
      className="block w-full font-work text-dark py-3 px-4 sm:py-4 sm:px-6 lg:py-5 lg:px-7 bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    />
  )
}

// TextArea component

interface TextAreaProps extends Input {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ placeholder, id, name, required, value, onChange }) => {
  return (
    <textarea
      placeholder={placeholder}
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className="block w-full font-work text-dark py-3 px-4 sm:py-4 sm:px-6 lg:py-5 lg:px-7 bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    />
  )
}


// Option Component

interface OptionProps extends Input {
  children: React.ReactNode;
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

interface SelectProps extends Input {
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> & { Option: React.FC<OptionProps> } = ({ children, name, id, value, onChange }) => {
  return (
    <select
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className="w-full font-work text-dark py-3 px-4 sm:py-4 sm:px-6 lg:py-5 lg:px-7 bg-gray-100 border border-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    >
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
  TextArea: React.FC<TextAreaProps>,
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
InputAndLabel.TextArea = TextArea;
InputAndLabel.Select = Select;

export default InputAndLabel;