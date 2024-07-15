import React from 'react'
import Button from '../button/Button';
import AuthContext from '../../contexts/auth/AuthContext';
import ApplicationForm from '../forms/ApplicationForm';
import ApplicationFormContext from '../../contexts/applicationForm/ApplicationFormContext';

interface ServiceCardProps {
  _id: string;
  serviceName: string;
  serviceDescription: string;
  serviceType: number;
  DownloadableForm?: boolean;
}

const ServiceCard = ({ _id, serviceName, serviceDescription, DownloadableForm }: ServiceCardProps) => {
  const { isLoggedIn } = React.useContext(AuthContext);
  const { openForm } = React.useContext(ApplicationFormContext);

  return (
    <>
      <div className='
        font-work text-center w-full border border-primary py-14 px-8 rounded-lg bg-gray
        grid grid-cols-1 gap-10
      ' >
        <div className='flex-col space-y-4' >
          <h3 className='text-lg font-medium' >{serviceName}</h3>
          <p className='text-base ' >{serviceDescription}</p>
        </div>
        <div className='flex justify-center gap-5' >
          {
            DownloadableForm && <Button color='dark' design='stroked'>Download</Button>
          }
          {
            isLoggedIn ?
              <Button onClick={() => { openForm(_id, serviceName) }} color='dark'>Apply</Button> :
              <Button link={true} path='/auth/signin' color='dark' design='stroked'>Apply</Button>
          }
        </div>
      </div>
      {/* {selectedService && <ApplicationForm serviceName={serviceName} serviceId={_id} />} */}
    </>
  )
}

export default ServiceCard
