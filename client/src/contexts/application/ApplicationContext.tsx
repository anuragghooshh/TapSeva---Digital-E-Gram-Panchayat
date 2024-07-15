import React from 'react'
import ApplicationInterface from '../../interfaces/ApplicationInterface';

const ApplicationContext = React.createContext<{
    applications: ApplicationInterface[];
    createApplication: (applicationData: any) => void;
    updateApplication: (applicationId: string, status: string) => void;
    applicationStats: {
        totalApplications: number;
        pendingApplications: number;
        approvedApplications: number;
        rejectedApplications: number;
    
    };
}>({
    applications: [],
    createApplication: () => { },
    updateApplication: () => { },
    applicationStats: {
        totalApplications: 0,
        pendingApplications: 0,
        approvedApplications: 0,
        rejectedApplications: 0,
    }
});

export default ApplicationContext;