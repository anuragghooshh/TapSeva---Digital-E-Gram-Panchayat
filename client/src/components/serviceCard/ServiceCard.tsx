import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Button from '../button/Button';
import AuthContext from '../../contexts/auth/AuthContext';
import ApplicationForm from '../forms/ApplicationForm';
import ApplicationFormContext from '../../contexts/applicationForm/ApplicationFormContext';

interface ServiceCardProps {
  _id: string;
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  DownloadableForm?: boolean;
}

const ServiceCard = ({ _id, serviceName, serviceDescription, DownloadableForm }: ServiceCardProps) => {
  const { isLoggedIn } = React.useContext(AuthContext);
  const { openForm } = React.useContext(ApplicationFormContext);

  return (
    <>
      <div className='
        font-work text-center w-full bg-light border border-tertiary
        grid grid-cols-1 gap-5 px-5 py-10
        md:px-10 md:py-20
      ' >
        <div className='flex-col space-y-4' >
          <h3 className='text-lg font-medium' >{serviceName}</h3>
          <p className='text-sm md:text-base ' >{serviceDescription}</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 flex-wrap lg:flex-row' >
          {
            DownloadableForm && <Button color='dark' design='stroked'>Download</Button>
          }
          {
            isLoggedIn ?
              <Button onClick={() => { openForm(_id, serviceName) }} color='dark' design='filled'>
                Apply
                <FaLongArrowAltRight />
              </Button> :
              <Button link={true} path='/auth/signin' color='dark' design='filled'>
                Apply
                <FaLongArrowAltRight />
              </Button>
          }
        </div>
      </div>
      {/* {selectedService && <ApplicationForm serviceName={serviceName} serviceId={_id} />} */}
    </>
  )
}

export default ServiceCard
