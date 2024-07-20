import React from 'react';
import { useSearchParams } from 'react-router-dom';
import TabsContext from '../../contexts/tabs/TabsContext';
import TabsContextProvider from '../../contexts/tabs/TabsContextProvider';
import Button from '../button/Button';

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
    const [searchParams, setSearchParams] = useSearchParams();
    const { activeTab, setActiveTab } = React.useContext(TabsContext);

    const handleClick = () => {
        setActiveTab(name);
        setSearchParams(path);
    };

    return (
        <Button onClick={handleClick} design={activeTab === name ? 'filled' : 'stroked'} color='color'>
            {children}
        </Button>
    );
};

Tabs.Tab = Tab;

export default Tabs;