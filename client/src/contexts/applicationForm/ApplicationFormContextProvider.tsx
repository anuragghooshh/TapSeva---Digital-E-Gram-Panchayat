import React from 'react'
import ApplicationFormContext from './ApplicationFormContext'

interface ApplicationFormContextProviderProps {
    children: React.ReactNode
}

const ApplicationFormContextProvider: React.FC<ApplicationFormContextProviderProps> = ({ children }) => {
    const [isFormOpen, setIsFormOpen] = React.useState(false);
    const [selectedService, setSelectedService] = React.useState({
        _id: '',
        service_name: '',
    });

    const openForm = (_id: string, service_name: string) => {
        setSelectedService({
            _id : _id,
            service_name: service_name,
        });
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setSelectedService({
            _id: '',
            service_name: '',
        });
        setIsFormOpen(false);
    };

    return (
        <ApplicationFormContext.Provider value={{ openForm, closeForm, isFormOpen, selectedService }} >
            {children}
        </ApplicationFormContext.Provider>
    )
}

export default ApplicationFormContextProvider
