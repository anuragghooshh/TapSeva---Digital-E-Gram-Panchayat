import React from 'react'
import ApplicationInterface from '../../interfaces/ApplicationInterface';

interface ApplicationContextInterface {
    applications: ApplicationInterface[];
    createApplication: (applicationData: any) => void;
    updateApplication: (applicationId: string, status: string) => void;
    withdrawApplication: (applicationId: string) => void;
    applicationStats: {
        totalApplications: number;
        pendingApplications: number;
        approvedApplications: number;
        rejectedApplications: number;
    };
    setFiltersAndSorts: (filters: object, sorts: object) => Promise<void>;
    filters: {
        status?: 'Approved' | 'Pending' | 'Rejected' | '' | undefined;
    };
    sorts: {
        sortBy?: string;
        order?: 'asc' | 'desc' | '' | undefined;
    };
    loading: boolean;
}

const ApplicationContext = React.createContext<ApplicationContextInterface>({
    applications: [],
    createApplication: () => { },
    updateApplication: () => { },
    withdrawApplication: () => { },
    applicationStats: {
        totalApplications: 0,
        pendingApplications: 0,
        approvedApplications: 0,
        rejectedApplications: 0,
    },
    setFiltersAndSorts: () => Promise.resolve(),
    filters: {},
    sorts: {},
    loading: false,
});

export default ApplicationContext;