import React from 'react'
import DropdownContextProvider from '../../contexts/dropdown/DropdownContextProvider'
import DropdownContext from '../../contexts/dropdown/DropdownContext';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

interface DropdownProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const dropDownCommonStyle = 'px-6 min-h-14 min-w-36 w-full md:w-auto';

const DropdownToggle: React.FC<DropdownProps> = ({ children }) => {
    const { setIsOpen, isOpen } = React.useContext(DropdownContext);

    const open = () => {
        setIsOpen(true);
    }

    const close = () => {
        setIsOpen(false);
    }

    const toggle = () => {
        isOpen ? close() : open();
    }

    return (
        <button className={`${dropDownCommonStyle} relative border border-neutral-300 flex items-center justify-between rounded-md`} onClick={toggle} onMouseEnter={open} onMouseLeave={close}>
            {children}
            {
                isOpen ? <FaAngleUp /> : <FaAngleDown />
            }
        </button>
    )
}

const DropdownMenu: React.FC<DropdownProps> = ({ children }) => {
    const { isOpen, setIsOpen } = React.useContext(DropdownContext);

    const open = () => {
        setIsOpen(true);
    }

    const close = () => {
        setIsOpen(false);
    }

    return (
        isOpen ? (
            <div className='flex flex-col absolute left-0 pt-4' onMouseEnter={open} onMouseLeave={close}>
                <div className='bg-light-100 border border-neutral-300 rounded-md overflow-hidden z-40'>
                    {children}
                </div>
            </div>
        ) : null
    )
}

const DropdownItem: React.FC<DropdownProps> = ({ onClick, children }) => {
    const { setIsOpen } = React.useContext(DropdownContext);

    const close = () => {
        setIsOpen(false);
    }

    const handleClick = () => {
        onClick && onClick();
        close();
    }

    return (
        <button className={`${dropDownCommonStyle} text-dark hover:bg-primary hover:text-light-100`} onClick={handleClick}>
            {children}
        </button>
    )
}

const Dropdown: React.FC<DropdownProps> & {
    Toggle: React.FC<DropdownProps>;
    Menu: React.FC<DropdownProps>;
    Item: React.FC<DropdownProps>;
} = ({ children }) => {

    return (
        <DropdownContextProvider>
            <div className='relative w-full md:w-auto'>
                <div>
                    {children}
                </div>
            </div>
        </DropdownContextProvider>
    )
}

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

export default Dropdown
