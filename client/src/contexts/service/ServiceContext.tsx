import React from 'react'
import ServiceInterface from '../../interfaces/ServiceInterface';

interface ServiceCategory {
    category: string;
    count: number;
}

interface ServiceContextType {
    services: ServiceInterface[];
    servicesStats: ServiceCategory[];
}

const ServiceContext = React.createContext<ServiceContextType>({
    services: [],
    servicesStats: [],
});

export default ServiceContext;