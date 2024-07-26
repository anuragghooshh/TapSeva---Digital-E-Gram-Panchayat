import React from 'react'
import ApplicationInterface from '../../interfaces/ApplicationInterface';

interface ApplicationContextInterface {
    applications: ApplicationInterface[];
    createApplication: (applicationData: any) => void;
    updateApplication: (applicationId: string, status: string) => void;
    applicationStats: {
        totalApplications: number;
        pendingApplications: number;
        approvedApplications: number;
        rejectedApplications: number;
    };
    setFiltersAndSorts: (filters: object, sorts: object) => Promise<void>;
}

const ApplicationContext = React.createContext<ApplicationContextInterface>({
    applications: [],
    createApplication: () => { },
    updateApplication: () => { },
    applicationStats: {
        totalApplications: 0,
        pendingApplications: 0,
        approvedApplications: 0,
        rejectedApplications: 0,
    },
    setFiltersAndSorts: () => Promise.resolve(),
});

export default ApplicationContext;