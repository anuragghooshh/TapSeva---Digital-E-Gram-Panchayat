import React from 'react'
import AuthContext from '../../contexts/auth/AuthContext'
import ApplicationContext from '../../contexts/application/ApplicationContext'
import UserDataInterface from '../../interfaces/UserDataInterface'
import ApplicationInterface from '../../interfaces/ApplicationInterface'
import Button from '../../components/button/Button'


interface ApplicationDetailsInterface extends ApplicationInterface {
    user: {
        _id: string;
        name: string;
        address: string;
        aadhaarNo: string;
        dob: string;
        maritalStatus: string;
    };
}

interface ApplicationDetailsModalProps {
    applicationId: string | null;
    closeModal: () => void;
}

const ApplicationDetailsModal: React.FC<ApplicationDetailsModalProps> = ({ applicationId, closeModal }) => {
    const { updateApplication } = React.useContext(ApplicationContext);

    const [applicationDetails, setApplicationDetails] = React.useState<ApplicationDetailsInterface>({
        _id: '',
        serviceId: '',
        serviceName: '',
        currentOccupation: '',
        message: '',
        status: 'Pending',
        createdAt: new Date(),
        userId: '',
        user: {
            _id: '',
            name: '',
            address: '',
            aadhaarNo: '',
            dob: '',
            maritalStatus: 'Single',
        }
    })

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    // React.useEffect(() => {
    //     try {
    //         fetch(`/api/applications/${applicationId}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }
    //         }).
    //             then(res => res.json()).
    //             then(data => {
    //                 const tempApplicationDetails = {
    //                     _id: data._id,
    //                     serviceId: data.serviceId,
    //                     serviceName: data.serviceName,
    //                     userId: data.userId,
    //                     message: data.message,
    //                     currentOccupation: data.currentOccupation,
    //                     status: data.status,
    //                     createdAt: new Date(data.createdAt),
    //                     user: {
    //                         _id: data.userId._id,
    //                         name: data.userId.name,
    //                         address: data.userId.address,
    //                         aadhaarNo: data.userId.aadhaarNo,
    //                         dob: data.userId.dob,
    //                         maritalStatus: data.userId.maritalStatus,
    //                     }
    //                 }
    //                 console.log(data)
    //                 setApplicationDetails(tempApplicationDetails);
    //             })
    //     } catch (error) {
    //         setError(error as React.SetStateAction<null>);
    //     } finally {
    //         setLoading(false);
    //     }
    // }, [applicationId]);

    React.useEffect(() => {
        setApplicationDetails(applicationDetails);
        setLoading(false);
    }, [applicationId]);

    const approve = () => {
        updateApplication(applicationDetails._id, 'Approved');
        closeModal();
    }

    const reject = () => {
        updateApplication(applicationDetails._id, 'Rejected');
        closeModal();
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-5">

            <div className='border-green-500 border-8 relative w-full min-h-full bg-light-100 overflow-y-auto'>
                <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
                    <h1 className="text-2xl font-semibold text-dark">Application Details</h1>
                    <span className="close text-gray-500 cursor-pointer text-2xl" onClick={closeModal}>&times;</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-lg font-medium text-dark">Service</h2>
                        <p className="text-base text-dark">{applicationDetails.serviceName}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-dark">Status</h2>
                        <p className="text-base text-dark">{applicationDetails.status}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-dark">Application Date</h2>
                        <p className="text-base text-dark">{applicationDetails.createdAt.toDateString()}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-dark">Applicant Name</h2>
                        <p className="text-base text-dark">{applicationDetails.user.name}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-dark">Applicant Address</h2>
                        <p className="text-base text-dark">{applicationDetails.user.address}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-dark">Aadhaar No</h2>
                        <p className="text-base text-dark">{applicationDetails.user.aadhaarNo}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-dark">Date of Birth</h2>
                        <p className="text-base text-dark">{applicationDetails.user.dob}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-dark">Marital Status</h2>
                        <p className="text-base text-dark">{applicationDetails.user.maritalStatus}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-dark">Occupation</h2>
                        <p className="text-base text-dark">{applicationDetails.currentOccupation}</p>
                    </div>
                    <div className="col-span-1 sm:col-span-2">
                        <h2 className="text-lg font-medium text-dark">Message</h2>
                        <p className="text-base text-dark whitespace-pre-wrap break-words">{applicationDetails.message}</p>
                    </div>
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <Button onClick={reject}>Reject</Button>
                    <Button onClick={approve}>Approve</Button>
                </div>
            </div>
        </div>
    )
}
export default ApplicationDetailsModal
