import React from 'react'
import DropdownContextProvider from '../../contexts/dropdown/DropdownContextProvider'
import DropdownContext from '../../contexts/dropdown/DropdownContext';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

interface DropdownProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const dropDownCommonStyle = 'px-6 min-h-14 min-w-36';

const DropdownToggle: React.FC<DropdownProps> = ({ children }) => {
    const { setIsOpen, isOpen } = React.useContext(DropdownContext);

    const open = () => {
        setIsOpen(true);
        console.log('open');
    }

    const close = () => {
        setIsOpen(false);
        console.log('close');
    }

    return (
        <button className={`${dropDownCommonStyle} relative border flex items-center justify-between rounded-md`} onMouseEnter={open} onMouseLeave={close}>
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
        console.log('open');
    }

    const close = () => {
        setIsOpen(false);
        console.log('close');
    }

    return (
        isOpen ? (
            <div className='flex flex-col absolute left-0 pt-4' onMouseEnter={open} onMouseLeave={close}>
                <div className='bg-gray-100 border shadow-lg rounded-md overflow-hidden'>
                    {children}
                </div>
            </div>
        ) : null
    )
}

const DropdownItem: React.FC<DropdownProps> = ({ onClick, children }) => {
    return (
        <button className={`${dropDownCommonStyle} text-dark hover:bg-primary hover:text-light-100`} onClick={onClick}>
            {children}
        </button>
    )
}

const Dropdown: React.FC<DropdownProps> & {
    Toggle: React.FC<DropdownProps>;
    Menu: React.FC<DropdownProps>;
    Item: React.FC<DropdownProps>;
} = ({ children }) => {

    const { setIsOpen } = React.useContext(DropdownContext);
    const [hover, setHover] = React.useState(false);


    const open = () => {
        setIsOpen(true);
        console.log('open');
    }

    const close = () => {
        setIsOpen(false);
        console.log('close');
    }

    return (
        <DropdownContextProvider>
            <div className='relative' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div onMouseEnter={() => open} onMouseLeave={() => setHover(false)}>
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
