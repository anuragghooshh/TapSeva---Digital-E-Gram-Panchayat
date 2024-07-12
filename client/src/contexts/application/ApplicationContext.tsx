import React from 'react'
import ApplicationInterface from '../../interfaces/ApplicationInterface';

const ApplicationContext = React.createContext<{
    applications: ApplicationInterface[];
    createApplication: (applicationData: ApplicationInterface) => void;
    updateApplication: (applicationId: string, status: string) => void;
}>({
    applications: [],
    createApplication: () => { },
    updateApplication: () => { },
});

export default ApplicationContext;