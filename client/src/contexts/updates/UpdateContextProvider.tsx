import React from 'react'
import UpdateContext from './UpdateContext'
import UpdateInterface from '../../interfaces/UpdateInterface';
import fetchUpdates from '../../services/FetchUpdates';

interface UpdateContextProviderInterface {
    children: React.ReactNode;
}

const UpdateContextProvider: React.FC<UpdateContextProviderInterface> = ({ children }) => {
    const [updates, setUpdates] = React.useState<UpdateInterface[]>([]);

    React.useEffect(() => {
        fetchUpdates().then((data) => {
            setUpdates(data);
        });
    }, []);

    return (
        <UpdateContext.Provider value={{ updates, setUpdates }}>
            {children}
        </UpdateContext.Provider>
    )
}

export default UpdateContextProvider
