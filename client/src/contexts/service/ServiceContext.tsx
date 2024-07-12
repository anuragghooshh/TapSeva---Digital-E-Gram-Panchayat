import React from 'react'
import ServiceInterface from '../../interfaces/ServiceInterface';

interface ServiceContextType {
    services: ServiceInterface[];
}

const ServiceContext = React.createContext<ServiceContextType>({
    services: [],
});

export default ServiceContext;