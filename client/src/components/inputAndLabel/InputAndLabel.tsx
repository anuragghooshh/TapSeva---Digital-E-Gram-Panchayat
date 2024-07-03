import React from 'react'

export interface InputAndLabelProps {
    children : React.ReactNode      
}

const InputAndLabel : React.FC<InputAndLabelProps> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default InputAndLabel
