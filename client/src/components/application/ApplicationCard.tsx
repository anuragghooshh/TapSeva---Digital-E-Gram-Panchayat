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
    <div className='w-full max-w-dsktp border mx-auto mt-5 p-8 space-y-10'>
      {/* Top Portion  */}
      <div className='w-full grid grid-flow-col grid-cols-5'>
        {
          userType == 'admin' ?
            <div className='inline'>
              <h4 className='font-work text-sm text-dark'>User ID</h4>
              <p className='font-work text-lg font-medium text-dark'>{userId}</p>
            </div> : null
        }
        <div className='inline'>
          <h4 className='font-work text-sm text-dark'>Application ID</h4>
          <p className='font-work text-lg font-medium text-dark'>{applicationId}</p>
        </div>
        <div className='inline'>
          <h4 className='font-work text-sm text-dark'>Application Date</h4>
          <p className='font-work text-lg font-medium text-dark'>{createdAt?.toString()}</p>
        </div>
        <div className='inline'>
          <h4 className='font-work text-sm text-dark'>Service Name</h4>
          <p className='font-work text-lg font-medium text-dark'>{serviceName}</p>
        </div>
        <div className='inline'>
          <h4 className='font-work text-sm text-dark'>Status</h4>
          <p className='font-work text-lg font-medium text-dark'>{status}</p>
        </div>
      </div>
      {/* Bottom Portion */}
      <div className='flex'>
        <p className='w-full basis-3/6'>Please visit your nearest panchayat office to retrieve your documents by mentioning your User ID.</p>

        {
          userType == 'admin' ?
            <div className='w-full basis-3/6 flex justify-end gap-5'>
              <Button design='stroked'>View Details</Button>
              <Button design='stroked' onClick={reject}>Reject</Button>
              <Button onClick={approve} >Approve</Button>
            </div> :
            <div className='w-full basis-3/6 flex justify-end gap-5'>
              <Button>Withdraw</Button>
            </div>
        }
      </div>
    </div>
  )
}

export default ApplicationCard