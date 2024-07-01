import React from 'react';
import { NavLink } from 'react-router-dom';

export interface TabProps {
    children: React.ReactNode;
    path: string;
}

const Tab: React.FC<TabProps> = ({ children, path }) => {
    return (
        <>
            <NavLink
                to={path}
                className={({ isActive }) =>
                    isActive ? "py-5 px-10 bg-dark text-light outline-none " : "py-5 px-10 bg-light text-dark"
                }
            >
                {children}
            </NavLink >
        </>
    );
}

export default Tab;
