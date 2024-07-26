import React from 'react'
import Button from '../button/Button'
import AuthContext from '../../contexts/auth/AuthContext';
import ApplicationContext from '../../contexts/application/ApplicationContext';
import ApplicationInterface from '../../interfaces/ApplicationInterface';
import '../../styles/applicationCard.css';

interface ApplicationDetailsInterface extends ApplicationInterface {
  user: {
    _id: string;
    name: string;
    sex: string;
    address: string;
    aadhaarNo: string;
    dob: string;
    maritalStatus: string;
  };
}

const ApplicationCard: React.FC<ApplicationInterface> = ({ _id, userId, serviceName, createdAt, status, message, currentOccupation, serviceId }) => {
  const { userType } = React.useContext(AuthContext);


  // Update application status
  const { updateApplication } = React.useContext(ApplicationContext);

  const approve = () => {
    updateApplication(_id, 'Approved');
  }

  const reject = () => {
    updateApplication(_id, 'Rejected');
  }


  // Application Details
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
      sex: '',
      address: '',
      aadhaarNo: '',
      dob: '',
      maritalStatus: 'Single',
    }
  })

  const [loading, setLoading] = React.useState(true);
  const [allDetails, setAllDetails] = React.useState(false);
  const [error, setError] = React.useState(null);

  const viewMoreDetails = () => {
    try {
      fetch(`/api/applications/${_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).
        then(res => res.json()).
        then(data => {
          const tempApplicationDetails = {
            _id: _id,
            serviceId: serviceId,
            serviceName: serviceName,
            userId: userId,
            message: message,
            currentOccupation: currentOccupation,
            status: status,
            createdAt: new Date(createdAt),
            user: {
              _id: data.userId._id,
              name: data.userId.name,
              sex: data.userId.sex,
              address: data.userId.address,
              aadhaarNo: data.userId.aadhaarNo,
              dob: data.userId.dob,
              maritalStatus: data.userId.maritalStatus,
            }
          }
          setApplicationDetails(tempApplicationDetails);
        })
      setLoading(false);
      console.log("YES CLICKED")

    } catch (error) {
      setError(error as React.SetStateAction<null>);
    } finally {
      setLoading(false);
    }
  }

  const toggleAllDetails = () => {
    if (loading) {
      viewMoreDetails();
    } else {
      setAllDetails(!allDetails);
      setLoading(true);
    }
  }

  const applicationContent = () => {
    return (
      <div className={`grid details gap-4 ${!loading ? 'viewAll' : null}`}>
        {userType === 'admin' && (
          <div className="user-id">
            <h4 className="font-work text-base font-medium text-gray-700">User ID</h4>
            <p className="font-work text-base md:text-lg font-semibold text-gray-900 truncate">{userId}</p>
          </div>
        )}
        <div className="application-id">
          <h4 className="font-work text-base font-medium text-gray-700">Application ID</h4>
          <p className="font-work text-base md:text-lg font-semibold text-gray-900 truncate">{_id}</p>
        </div>
        <div className="application-date">
          <h4 className="font-work text-base font-medium text-gray-700">Application Date</h4>
          <p className="font-work text-base md:text-lg font-semibold text-gray-900">{new Date(createdAt).toDateString()}</p>
        </div>
        <div className="service-name">
          <h4 className="font-work text-base font-medium text-gray-700">Service Name</h4>
          <p className="font-work text-base md:text-lg font-semibold text-gray-900">{serviceName}</p>
        </div>
        <div className="status">
          <h4 className="font-work text-base font-medium text-gray-700">Status</h4>
          <p className={`font-work text-base md:text-lg font-semibold ${status === "Approved" ? "text-positive-400" : status === "Rejected" ? "text-negative-400" : "text-dark"}`}>{status}</p>
        </div>
        {!loading && (
          <>
            <div className="message">
              <h4 className="font-work text-base font-medium text-gray-700">Message</h4>
              <p className="font-work text-base md:text-lg font-semibold text-gray-900">{message}</p>
            </div>
            <div className="current-occupation">
              <h4 className="font-work text-base font-medium text-gray-700">Current Occupation</h4>
              <p className="font-work text-base md:text-lg font-semibold text-gray-900">{currentOccupation}</p>
            </div>
            <div className="user-details">
              <h4 className="text-base font-medium text-gray-700 mb-5">User Details</h4>
              <div className="grid gap-4">
                <div className="user-name">
                  <h5 className="font-work text-base font-medium text-gray-700">Name</h5>
                  <p className="font-work text-base md:text-lg font-semibold text-gray-900">{applicationDetails.user.name}</p>
                </div>
                <div className="sex">
                  <h5 className="font-work text-base font-medium text-gray-700">Sex</h5>
                  <p className="font-work text-base md:text-lg font-semibold text-gray-900">{applicationDetails.user.sex}</p>
                </div>
                <div className="user-address">
                  <h5 className="font-work text-base font-medium text-gray-700">Address</h5>
                  <p className="font-work text-base md:text-lg font-semibold text-gray-900">{applicationDetails.user.address}</p>
                </div>
                <div className="user-aadhaar">
                  <h5 className="font-work text-base font-medium text-gray-700">Aadhaar Number</h5>
                  <p className="font-work text-base md:text-lg font-semibold text-gray-900">{applicationDetails.user.aadhaarNo}</p>
                </div>
                <div className="user-dob">
                  <h5 className="font-work text-base font-medium text-gray-700">Date of Birth</h5>
                  <p className="font-work text-base md:text-lg font-semibold text-gray-900">{new Date(applicationDetails.user.dob).toDateString()}</p>
                </div>
                <div className="user-marital-status">
                  <h5 className="font-work text-base font-medium text-gray-700">Marital Status</h5>
                  <p className="font-work text-base md:text-lg font-semibold text-gray-900">{applicationDetails.user.maritalStatus}</p>
                </div>
              </div>
            </div>
          </>
        )}
        <button onClick={toggleAllDetails} className='underline cursor-pointer font-work text-dark view-more text-left'>{loading ? "View More" : "View Less"}</button>
      </div>
    )
  }


  return (
    <div className="application-card w-full max-w-7xl border border-neutral-300 mx-auto mt-5 p-6 sm:p-8 md:p-10 space-y-8 md:space-y-10 rounded-md">
      {applicationContent()}
      <div className="flex flex-col md:flex-row gap-4 font-work">
        <p className="w-full md:basis-3/6 text-base md:text-lg text-gray-800 font-work">
          Please visit your nearest panchayat office to retrieve your documents by mentioning your User ID.
        </p>
        <div className="w-full md:basis-3/6 flex flex-col md:flex-row items-end justify-end gap-2 md:gap-4">
          {userType === 'admin' ? (
            <>
              <Button color='negative' onClick={reject}>Reject</Button>
              <Button color='positive' onClick={approve}>Approve</Button>
            </>
          ) : (
            <Button>Withdraw</Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ApplicationCard