import React from 'react'

export interface TabsProps {
    children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
    return (
        <div className='space-x-5'>
            {children}
        </div>
    )
}

export default Tabs;
