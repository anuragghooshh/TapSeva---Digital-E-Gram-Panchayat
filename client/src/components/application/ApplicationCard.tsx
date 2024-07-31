import React from 'react'
import Button from '../button/Button'
import AuthContext from '../../contexts/auth/AuthContext';
import ApplicationContext from '../../contexts/application/ApplicationContext';
import ApplicationInterface from '../../interfaces/ApplicationInterface';
import { CgClose } from 'react-icons/cg';
import { BiCheck } from 'react-icons/bi';
import { useInView } from 'react-intersection-observer';
import Confirmation from '../confirmation/Confirmation';

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
  const [isConfModalOpen, setIsConfModalOpen] = React.useState(false);

  // Auth Context
  const { userType, isLoggedIn } = React.useContext(AuthContext);

  // Update application status
  const { updateApplication, withdrawApplication } = React.useContext(ApplicationContext);

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
  const [ref, inView] = useInView({ 
    threshold: 0.01,
    triggerOnce: true, 
  });


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
    } catch (error) {
      console.error('Error:', error);
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

  const handleWithdraw = () => {
    withdrawApplication(_id);
    setIsConfModalOpen(false);
  }

  const applicationContent = () => {
    return (
      <div className={
        `
          grid grid-cols-1 md:grid-cols-3 gap-5
          ${!loading ? 'viewAll' : null}
        `
      }>
        {userType === 'admin' && (
          <div className="user-id md:col-span-3 lg:col-span-1">
            <h4 className="font-work text-base font-medium text-neutral-500">User ID</h4>
            <p className="font-work text-base md:text-lg font-semibold text-dark truncate">{userId}</p>
          </div>
        )}
        <div className="application-id md:col-span-3 lg:col-span-1">
          <h4 className="font-work text-base font-medium text-neutral-500">Application ID</h4>
          <p className="font-work text-base md:text-lg font-semibold text-dark truncate">{_id}</p>
        </div>
        <div className="application-date">
          <h4 className="font-work text-base font-medium text-neutral-500">Application Date</h4>
          <p className="font-work text-base md:text-lg font-semibold text-dark">{new Date(createdAt).toDateString()}</p>
        </div>
        <div className="service-name md:col-span-2 lg:col-span-1">
          <h4 className="font-work text-base font-medium text-neutral-500">Service Name</h4>
          <p className="font-work text-base md:text-lg font-semibold text-dark">{serviceName}</p>
        </div>
        <div className="status">
          <h4 className="font-work text-base font-medium text-neutral-500">Status</h4>
          <p className={`font-work text-base md:text-lg font-semibold ${status === "Approved" ? "text-positive-400" : status === "Rejected" ? "text-negative-400" : "text-dark"}`}>{status}</p>
        </div>
        {!loading && (
          <>
            <div className="message md:col-span-2">
              <h4 className="font-work text-base font-medium text-neutral-500">Message</h4>
              <p className="font-work text-base md:text-lg font-semibold text-dark">{message}</p>
            </div>
            <div className="current-occupation">
              <h4 className="font-work text-base font-medium text-neutral-500">Current Occupation</h4>
              <p className="font-work text-base md:text-lg font-semibold text-dark">{currentOccupation}</p>
            </div>
            <div className="user-details md:col-span-3 mt-5">
              <h4 className="text-base font-medium text-neutral-500 mb-5 after:h-0.5 after:w-full after:bg-gray-100 after:block after:mt-3">User Details</h4>
              <div className="grid gap-5 grid-cols-2 md:grid-cols-3">
                <div className="user-name col-span-2">
                  <h5 className="font-work text-base font-medium text-neutral-500">Name</h5>
                  <p className="font-work text-base md:text-lg font-semibold text-dark">{applicationDetails.user.name}</p>
                </div>
                <div className="sex">
                  <h5 className="font-work text-base font-medium text-neutral-500">Sex</h5>
                  <p className="font-work text-base md:text-lg font-semibold text-dark">{applicationDetails.user.sex}</p>
                </div>
                <div className="user-dob">
                  <h5 className="font-work text-base font-medium text-neutral-500">Date of Birth</h5>
                  <p className="font-work text-base md:text-lg font-semibold text-dark">{new Date(applicationDetails.user.dob).toDateString()}</p>
                </div>
                <div className="user-aadhaar col-span-2 md:col-span-1">
                  <h5 className="font-work text-base font-medium text-neutral-500">Aadhaar Number</h5>
                  <p className="font-work text-base md:text-lg font-semibold text-dark">{applicationDetails.user.aadhaarNo}</p>
                </div>

                <div className="user-marital-status">
                  <h5 className="font-work text-base font-medium text-neutral-500">Marital Status</h5>
                  <p className="font-work text-base md:text-lg font-semibold text-dark">{applicationDetails.user.maritalStatus}</p>
                </div>
                <div className="user-address col-span-2 md:col-span-3">
                  <h5 className="font-work text-base font-medium text-neutral-500">Address</h5>
                  <p className="font-work text-base md:text-lg font-semibold text-dark">{applicationDetails.user.address}</p>
                </div>
              </div>
            </div>
          </>
        )}
        {
          isLoggedIn && userType !== 'villager' && (
            <button onClick={toggleAllDetails} className='underline cursor-pointer font-work text-dark view-more text-left'>{loading ? "View More" : "View Less"}</button>
          )
        }
      </div>
    )
  }


  return (
    <>
      <div ref={ref} className={
        "bg-light-100 w-full max-w-7xl border-2 border-neutral-200 mx-auto mt-5 p-6 sm:p-8 md:p-10 space-y-8 md:space-y-10 rounded-md transform transition-all ease-bounce duration-500 " +
        `${inView ? 'opacity-100 translate-y-0' : 'opacity-10 translate-y-1/3'}`
      }>
        {applicationContent()}
        <div className="flex flex-col lg:flex-row gap-4 font-work">
          {
            isLoggedIn && userType == 'villager' && status == 'Approved' && (
              <p className="w-full text-base md:text-lg text-gray-800 font-work">
                Please visit your nearest panchayat office to acquire your documents by mentioning your User ID.
              </p>
            )
          }
          <div className="w-full grid gap-2 md:flex md:items-end md:justify-end">
            {userType != 'villager' ? (
              status === 'Pending' ? (
                <>
                  <Button color='negative' onClick={reject}>Reject<CgClose /></Button>
                  <Button color='positive' onClick={approve}>Approve<BiCheck /></Button>
                </>
              ) : (
                <Button design='stroked' color='disabled'>{status}</Button>
              )
            ) : status === 'Pending' ? (<Button color='dark' onClick={() => { setIsConfModalOpen(true) }}>Withdraw</Button>) : (
              <Button design='stroked' color='disabled'>{status}</Button>
            )
            }
          </div>
        </div>
      </div>
      <Confirmation
        isOpen={isConfModalOpen}
        title='Withdraw Application'
        message='Are you sure you want to withdraw your application?'
        onConfirm={handleWithdraw}
        onCancel={() => { setIsConfModalOpen(false) }}
      />
    </>
  )
}

export default ApplicationCard