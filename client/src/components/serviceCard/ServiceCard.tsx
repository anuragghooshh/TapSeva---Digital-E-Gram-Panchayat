import React from 'react'
import Button from '../button/Button';
import { AuthContext } from '../../contexts/AuthContextProvider';

interface ServiceCardProps {
  serviceName: string;
  serviceDescription: string;
  serviceType: number;
  DownloadableForm?: boolean;
}



const ServiceCard = ({ serviceName, serviceDescription, DownloadableForm }: ServiceCardProps) => {
  const { isLoggedIn } = React.useContext(AuthContext);
  
  return (
    <div className='
      font-work text-center w-full border border-primary py-14 px-8 rounded-lg bg-gray
      grid grid-cols-1 gap-10
    ' >
      <div className='flex-col space-y-4' >
        <h3 className='text-lg font-medium' >{serviceName}</h3>
        <p className='text-base ' >{serviceDescription}</p>
      </div>
      <div className='flex justify-center space-x-3' >
        {
          DownloadableForm && <Button color='dark' design='stroked'>Download</Button>
        }
        <Button color='dark'>Apply</Button>
      </div>
    </div>
  )
}

export default ServiceCard
