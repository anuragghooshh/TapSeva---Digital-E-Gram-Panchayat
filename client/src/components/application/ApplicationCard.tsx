import React from 'react'
import Button from '../button/Button'
import AuthContext from '../../contexts/auth/AuthContext';
import ApplicationContext from '../../contexts/application/ApplicationContext';

interface ApplicationCardInterface {
  applicationId: string;
  userId: string;
  serviceName: string;
  createdAt: Date;
  status: 'Pending' | 'Approved' | 'Rejected';
}

const ApplicationCard: React.FC<ApplicationCardInterface> = ({ applicationId, userId, serviceName, createdAt, status }) => {
  const { userType } = React.useContext(AuthContext);
  const { updateApplication } = React.useContext(ApplicationContext);

  const approve = () => {
    updateApplication(applicationId, 'Approved');
  }

  const reject = () => {
    updateApplication(applicationId, 'Rejected');
  }

  //Add view Details (Message, Occupation, User Details)

  return (
    <div className="w-full max-w-7xl border mx-auto mt-5 p-6 sm:p-8 md:p-10 space-y-8 md:space-y-10 rounded-md shadow-lg">
      {/* Top Portion */}
      {/* Top Portion */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {userType === 'admin' && (
          <div>
            <h4 className="text-sm font-medium text-gray-700">User ID</h4>
            <p className="text-base md:text-lg font-semibold text-gray-900 truncate">{userId}</p>
          </div>
        )}
        <div>
          <h4 className="text-sm font-medium text-gray-700">Application ID</h4>
          <p className="text-base md:text-lg font-semibold text-gray-900 truncate">{applicationId}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-700">Application Date</h4>
          <p className="text-base md:text-lg font-semibold text-gray-900">{new Date(createdAt).toDateString()}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-700">Service Name</h4>
          <p className="text-base md:text-lg font-semibold text-gray-900">{serviceName}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-700">Status</h4>
          <p className="text-base md:text-lg font-semibold text-gray-900">{status}</p>
        </div>
      </div>
      {/* Bottom Portion */}
      <div className="flex flex-col md:flex-row gap-4">
        <p className="w-full md:basis-3/6 text-base md:text-lg text-gray-800">
          Please visit your nearest panchayat office to retrieve your documents by mentioning your User ID.
        </p>
        <div className="w-full md:basis-3/6 flex flex-col md:flex-row justify-end gap-2 md:gap-4">
          {userType === 'admin' ? (
            <>
              <Button design="stroked">View Details</Button>
              <Button design="stroked" onClick={reject}>Reject</Button>
              <Button onClick={approve}>Approve</Button>
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