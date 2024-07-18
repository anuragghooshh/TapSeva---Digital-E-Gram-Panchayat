import React from 'react';
import { useSearchParams } from 'react-router-dom';
import TabsContext from '../../contexts/tabs/TabsContext';
import TabsContextProvider from '../../contexts/tabs/TabsContextProvider';

interface TabsProps {
    children: React.ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
    return (
        <TabsContextProvider>
            <div className='space-x-3'>{children}</div>
        </TabsContextProvider>
    );
};

interface TabProps {
    name: string;
    path: string;
    children: React.ReactNode;
}

const Tab = ({ name, path, children }: TabProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { activeTab, setActiveTab } = React.useContext(TabsContext);

    const handleClick = () => {
        setActiveTab(name);
        setSearchParams(path);
    };

    return (
        <button onClick={handleClick} className={`px-6 py-3 min-w-28 ${activeTab === name ? 'bg-dark text-light' : 'bg-none border text-dark'}`}>
            {children}
        </button>
    );
};

Tabs.Tab = Tab;

export default Tabs;