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
            <div className='flex flex-wrap gap-2'>{children}</div>
        </TabsContextProvider>
    );
};

interface TabProps {
    name: string;
    path: string;
    children: React.ReactNode;
}

const Tab = ({ name, path, children }: TabProps) => {
    const [, setSearchParams] = useSearchParams();
    const { activeTab, setActiveTab } = React.useContext(TabsContext);

    const handleClick = () => {
        setActiveTab(name);
        setSearchParams(path);
    };

    return (
        <button onClick={handleClick} className={`px-6 min-h-10 font-work flex items-center justify-center rounded-full ${ activeTab === name ? 'bg-secondary text-light-100' : 'bg-light-100 border text-secondary border-secondary'}`}>
            {children}
        </button>
    );
};

Tabs.Tab = Tab;

export default Tabs;