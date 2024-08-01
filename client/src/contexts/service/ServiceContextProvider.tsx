import React from 'react'
import ServiceContext from './ServiceContext';
import ServiceInterface from '../../interfaces/ServiceInterface';
import AuthContext from '../auth/AuthContext';

interface ServiceContextProviderInterface {
    children: React.ReactNode;
}

interface ServiceCategory {
    category: string;
    count: number;
}

const ServiceContextProvider: React.FC<ServiceContextProviderInterface> = ({ children }) => {
    const { userType, isLoggedIn } = React.useContext(AuthContext);
    const [loading, setLoading] = React.useState(false);
    const [services, setServices] = React.useState<ServiceInterface[]>([]);
    const [servicesStats, setServicesStats] = React.useState<ServiceCategory[]>([]);

    const fetchServices = async () => {
        try {
            setLoading(true);

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/services`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            const tempServices = [...data];

            setServices(tempServices);

            setLoading(false);
        } catch (err: any) {
            console.log('Error Fetching Services: ', err);
        }
    };

    const fetchStats = React.useCallback(async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/services/stats`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            const tempStats = [...result];
            setServicesStats(tempStats);
        } catch (err: any) {
            console.log('Error Fetching Stats: ', err);
        }
    }, []);

    React.useEffect(() => {
        fetchServices();
    }, []);

    React.useEffect(() => {
        isLoggedIn && userType !== 'villager' && fetchStats();
    }, [isLoggedIn, userType, fetchStats]);

    return (
        <ServiceContext.Provider value={{ services, servicesStats, setServices, loading }} >
            {children}
        </ServiceContext.Provider>
    )
}

export default ServiceContextProvider
