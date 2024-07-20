import React from 'react'

interface DropdownContext {
    isOpen : boolean;
    setIsOpen?: any;
    toggle: () => void;
}

const DropdownContext = React.createContext<DropdownContext>({
    isOpen: false,
    setIsOpen: () => {},
    toggle: () => {}
})

export default DropdownContext;