import React, { useEffect } from 'react'
import ApplicationContext from './ApplicationContext'
import AuthContext from '../auth/AuthContext';
import ApplicationInterface from '../../interfaces/ApplicationInterface';

interface ApplicationContextProvider {
    children: React.ReactNode;
}

const ApplicationContextProvider: React.FC<ApplicationContextProvider> = ({ children }) => {
    const [applications, setApplications] = React.useState([] as ApplicationInterface[]);
    const { isLoggedIn } = React.useContext(AuthContext);

    useEffect(() => {
        if (isLoggedIn) {
            fetchApplications();
        }
    }, [isLoggedIn]);

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

            if (response.ok) {
                setApplications(data);
            } else {
                console.log('Failed to fetch applications', data.msg);
            }
        } catch (err) {
            console.log('Error Fetching Applications: ', err);
        }
    }

    const createApplication = async (ApplicationData: ApplicationInterface) => {
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
        try{
            await fetch(`/api/applications/update-status}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({applicationId, status}),
            }).
            then((res) => res.json()).
            then((data) => {
                const updatedApplications = data;
                setApplications(updatedApplications);
            }).
            catch((err) => {
                console.log('Error updating application status', err);
            });
        }catch(err){
            console.log('Error updating application status', err);
        }
    }

    return (
        <ApplicationContext.Provider
            value={{ applications, createApplication, updateApplication }}
        >
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContextProvider
