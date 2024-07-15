import React, { useEffect } from 'react'
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

const ApplicationContextProvider: React.FC<ApplicationContextProvider> = ({ children }) => {
    const [applications, setApplications] = React.useState([] as ApplicationInterface[]);
    const [applicationStats, setApplicationStats] = React.useState({
        totalApplications: 0,
        pendingApplications: 0,
        approvedApplications: 0,
        rejectedApplications: 0,
    })
    const { isLoggedIn, userType } = React.useContext(AuthContext);

    const fetchApplications = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch('/api/applications/user', {
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
    }

    const fetchAllApplications = async () => {
        try {
            const response = await fetch('/api/applications/all', {
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
    }

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
            console.log("Err creating application.", err)
        }
    }

    const updateApplication = async (applicationId: string, status: string) => {
        console.log(`Updating application ${applicationId} with status ${status}`);

        const applicationDetails = {
            applicationId: applicationId,
            status: status
        }

        try {
            await fetch('/api/applications/update-status', {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationDetails),
            }).
                then((res) => res.json()).
                then((data) => {
                    const tempApplications = [...data];
                    setApplications(tempApplications);
                }).
                catch((err) => {
                    console.log('Error updating application status', err);
                });
        } catch (err) {
            console.log('Error updating application status', err);
        }
    }

    const fetchStats = async () => {
        try{
            await fetch('/api/applications/stats',{
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
        catch(err){
            console.log('Error fetching stats', err);
        }
    }

    useEffect(() => {
        if (isLoggedIn && userType === 'villager') {
            fetchApplications();
        } else if (isLoggedIn && userType === 'admin') {
            fetchAllApplications();
            fetchStats();
        }
    }, [isLoggedIn]);

    return (
        <ApplicationContext.Provider
            value={{ applications, createApplication, updateApplication, applicationStats }}
        >
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContextProvider