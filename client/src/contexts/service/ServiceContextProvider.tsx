import React from 'react'
import ServiceContext from './ServiceContext';
import ServiceInterface from '../../interfaces/ServiceInterface';
import AuthContext from '../auth/AuthContext';

interface ServiceContextInterface {
    children: React.ReactNode;
}

interface ServiceCategory {
    category: string;
    count: number;
}

const ServiceContextProvider: React.FC<ServiceContextInterface> = ({ children }) => {
    // const { userType, isLoggedIn } = React.useContext(AuthContext);

    const [services, setServices] = React.useState<ServiceInterface[]>([]);
    const [servicesStats, setServicesStats] = React.useState<ServiceCategory[]>([]);

    const fetchServices = async () => {
        try {
            const response = await fetch(`/api/services`);
            const data = await response.json();
            const tempServices = [...data];
            setServices(tempServices);
        } catch (err: any) {
            console.log('Error Fetching Services: ', err);
        }
    };

    const fetchStats = async () => {
        await fetch('/api/services/stats', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).
            then(response => response.json()).
            then(data => {
                const tempStats = [...data];
                setServicesStats(tempStats);
                console.log(tempStats)
            }).
            catch(err => console.log('Error Fetching Services Stats: ', err));
    }

    React.useEffect(() => {
        fetchServices();
        fetchStats();
    }, []);

    return (
        <ServiceContext.Provider value={{ services, servicesStats }} >
            {children}
        </ServiceContext.Provider>
    )
}

export default ServiceContextProvider
