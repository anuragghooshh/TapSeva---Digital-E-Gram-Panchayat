import React from 'react'
import Button from '../components/button/Button'
import { AuthContext } from '../contexts/AuthContextProvider'

interface applicantDetails {
  name: string,
  email: string,
  phone: string,
  dob: string,
}

const ApplicationCard = () => {
  const { userType } = React.useContext(AuthContext);

  return (
    <div className='w-full max-w-dsktp border mx-auto mt-5 p-8 space-y-10'>
      {/* Top Portion  */}
      <div className='w-full grid grid-flow-col grid-cols-5'>
        <div className='inline'>
          <h4 className='font-work text-sm text-dark'>User ID</h4>
          <p className='font-work text-lg font-medium text-dark'>123456</p>
        </div>
        <div className='inline'>
          <h4 className='font-work text-sm text-dark'>Application ID</h4>
          <p className='font-work text-lg font-medium text-dark'>123456</p>
        </div>
        <div className='inline'>
          <h4 className='font-work text-sm text-dark'>Application Date</h4>
          <p className='font-work text-lg font-medium text-dark'>12-12-2021</p>
        </div>
        <div className='inline'>
          <h4 className='font-work text-sm text-dark'>Service Name</h4>
          <p className='font-work text-lg font-medium text-dark'>Birth Certificate</p>
        </div>
        <div className='inline'>
          <h4 className='font-work text-sm text-dark'>Status</h4>
          <p className='font-work text-lg font-medium text-dark'>Approved</p>
        </div>
      </div>
      {/* Bottom Portion */}
      <div className='flex'>
        <p className='w-full basis-3/6'>Please visit your nearest panchayat office to retrieve your documents by mentioning your User ID.</p>

        {
          userType == 'admin' ?
            <div className='w-full basis-3/6 flex justify-end gap-5'>
              <Button design='stroked'>View Details</Button>
              <Button design='stroked'>Reject</Button>
              <Button>Approve</Button>
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