import React from 'react'
import TabsContext from './TabsContext'

interface TabsContextProviderProps {
    children: React.ReactNode
}

const TabsContextProvider: React.FC<TabsContextProviderProps> = ({ children }) => {
    const [activeTab, setActiveTab] = React.useState<string>('All');

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabsContext.Provider>
    );
}

export default TabsContextProvider
