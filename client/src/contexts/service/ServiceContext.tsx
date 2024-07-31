import React from 'react'
import ServiceInterface from '../../interfaces/ServiceInterface';

interface ServiceCategory {
    category: string;
    count: number;
}

interface ServiceContextType {
    services: ServiceInterface[];
    servicesStats: ServiceCategory[];
    setServices: React.Dispatch<React.SetStateAction<ServiceInterface[]>>;
}

const ServiceContext = React.createContext<ServiceContextType>({
    services: [],
    servicesStats: [],
    setServices: () => {},
});

export default ServiceContext;