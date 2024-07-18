import React from 'react'

interface TabsContextProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const TabsContext = React.createContext<TabsContextProps>({
    activeTab: '',
    setActiveTab: () => { },
});

export default TabsContext;