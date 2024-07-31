import React from 'react'
import ApplicationContext from './ApplicationContext'
import AuthContext from '../auth/AuthContext';
import ApplicationInterface from '../../interfaces/ApplicationInterface';

interface ApplicationContextProvider {
    children: React.ReactNode;
}

interface NewApplicationInterface {
    serviceId: string;
    serviceName: string;
    message: string;
    currentOccupation: string;
}

interface ApplicationFilterInterface {
    status?: 'Approved' | 'Pending' | 'Rejected' | '';
}

interface ApplicationSortInterface {
    sortBy?: string;
    order?: 'asc' | 'desc' | '';
}

const ApplicationContextProvider: React.FC<ApplicationContextProvider> = ({ children }) => {

    // Get the logged in status and user type from AuthContext 
    const { isLoggedIn, userType } = React.useContext(AuthContext);

    // Initialize applications state
    const [applications, setApplications] = React.useState([] as ApplicationInterface[]);

    // Initialize application stats state
    const [applicationStats, setApplicationStats] = React.useState({
        totalApplications: 0,
        pendingApplications: 0,
        approvedApplications: 0,
        rejectedApplications: 0,
    });

    // Initialize Filters and Sorts
    const [filters, setFilters] = React.useState<ApplicationFilterInterface>({
        status: ''
    });

    const [sorts, setSorts] = React.useState<ApplicationSortInterface>({
        sortBy: '',
        order: ''
    });

    // Set Filters and Sorts
    const setFiltersAndSorts = (filters: ApplicationFilterInterface, sorts: ApplicationSortInterface): Promise<void> => {
        return new Promise((resolve, _reject) => {
            setFilters(filters)
            setSorts(sorts);
            resolve();
        });
    }


    // Fetch applications based on user type
    const fetchApplications = React.useCallback(async () => {
        const token = localStorage.getItem('token');
        try {
            const query = new URLSearchParams();

            // Add filters to query params
            if (filters.status) {
                query.append('status', filters.status);
            }

            // Add sorting to query params
            if (sorts.sortBy) {
                query.append('sortBy', sorts.sortBy);
                query.append('order', sorts.order || 'asc');
            }

            const response = await fetch(`/api/applications/user?${query.toString()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            const data = await response.json();
            const tempApplications = [...data];

            if (response.ok) {
                setApplications(tempApplications);
            } else {
                console.log('Failed to fetch applications', data.msg);
            }
        } catch (err) {
            console.log('Error Fetching Applications: ', err);
        }
    }, [filters, sorts]);

    // Fetch all applications for admin
    const fetchAllApplications = React.useCallback(async () => {
        try {
            const query = new URLSearchParams();

            // Add filters to query params
            if (filters.status) {
                query.append('status', filters.status);
            }

            // Add sorting to query params
            if (sorts.sortBy) {
                query.append('sortBy', sorts.sortBy);
                query.append('order', sorts.order || 'asc');
            }

            const response = await fetch(`/api/applications/all?${query.toString()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            const tempApplications = [...data];

            if (response.ok) {
                setApplications(tempApplications);
            } else {
                console.log('Failed to fetch applications', data.msg);
            }
        } catch (err) {
            console.log('Error Fetching Applications: ', err);
        }
    }, [filters, sorts]);

    // Create a new application
    const createApplication = async (ApplicationData: NewApplicationInterface) => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('/api/applications/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(ApplicationData),
            })
            const data = await response.json();

            if (response.ok) {
                setApplications([...applications, data]);
            } else {
                console.log('Failed to create applications', data.msg);
            }
        } catch (err) {
            console.log("Error creating application.", err)
        }
    }

    // Update application status
    const updateApplication = React.useCallback(async (applicationId: string, status: string) => {

        const applicationDetails = {
            applicationId: applicationId,
            status: status
        }

        try {
            const response = await fetch('/api/applications/update-status', {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationDetails),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

        } catch (err) {
            console.log('Error updating application status', err);
        }
    }, []);

    // Withdraw application

    const withdrawApplication = React.useCallback(async (applicationId: string) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`/api/applications/${applicationId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to withdraw application');
            }

        } catch (err) {
            console.log('Error withdrawing application', err);
        }
    }, []);

    // Fetch application stats
    const fetchStats = React.useCallback(async () => {
        try {
            await fetch('/api/applications/stats', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).
                then((res) => res.json()).
                then((data) => {
                    const tempStats = {
                        totalApplications: data.totalApplications,
                        pendingApplications: data.totalPending,
                        approvedApplications: data.totalApproved,
                        rejectedApplications: data.totalRejected,
                    };
                    setApplicationStats(tempStats);
                }).
                catch((err) => {
                    console.log('Error fetching stats', err);
                });
        }
        catch (err) {
            console.log('Error fetching stats', err);
        }
    }, []);


    React.useEffect(() => {
        if (isLoggedIn && userType === 'villager') {
            fetchApplications();
            return;
        }
        if (isLoggedIn && userType != 'villager') {
            fetchAllApplications();
            return;
        }
    }, [isLoggedIn, userType, updateApplication, withdrawApplication, fetchAllApplications, fetchApplications]);

    React.useEffect(() => {
        if (isLoggedIn && userType != 'villager') {
            fetchStats();
        }
    }, [isLoggedIn, userType, fetchStats]);

    return (
        <ApplicationContext.Provider
            value={{ applications, createApplication, updateApplication, applicationStats, setFiltersAndSorts, withdrawApplication }}
        >
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContextProvider