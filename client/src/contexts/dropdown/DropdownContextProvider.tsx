import React from 'react'
import DropdownContext from './DropdownContext'

interface DropdownProviderProps {
    children: React.ReactNode
}

const DropdownContextProvider: React.FC<DropdownProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <DropdownContext.Provider value={{ isOpen, toggle, setIsOpen }}>
            {children}
        </DropdownContext.Provider>
    )
}

export default DropdownContextProvider;