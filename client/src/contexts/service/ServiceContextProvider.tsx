import React from 'react'
import ServiceContext from './ServiceContext';
import ServiceInterface from '../../interfaces/ServiceInterface';

interface ServiceContextInterface {
    children: React.ReactNode;
}

const ServiceContextProvider: React.FC<ServiceContextInterface> = ({ children }) => {
    const [services, setServices] = React.useState<ServiceInterface[]>([]);

    const fetchServices = async () => {
        try {
            const response = await fetch(`/api/services`);
            const data = await response.json();
            setServices(data);
        } catch (err:any) {
            console.log('Error Fetching Services: ', err);
        }
    };

    React.useEffect(() => {
        fetchServices();
    }, []);

    return (
        <ServiceContext.Provider value={{ services }} >
            {children}
        </ServiceContext.Provider>
    )
}

export default ServiceContextProvider
