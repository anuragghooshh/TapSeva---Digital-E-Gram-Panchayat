import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Button from '../button/Button';
import AuthContext from '../../contexts/auth/AuthContext';
import { useInView } from 'react-intersection-observer';
import { TiDownload } from 'react-icons/ti';
import ApplicationForm from '../forms/ApplicationForm';

interface ServiceCardProps {
  _id: string;
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  DownloadableForm?: string | null;
}

const ServiceCard = ({ _id, serviceName, serviceDescription, DownloadableForm }: ServiceCardProps) => {
  const { isLoggedIn, userType } = React.useContext(AuthContext);
  const [ref, inView] = useInView(
    {
      threshold: 0.01,
      triggerOnce: true,
    }
  );

  const serviceCardForUsers = () => {
    return (
      <div ref={ref} className={
        "w-full bg-light-100 border-2 border-neutral-200 rounded-md mx-auto p-6 md:p-8 flex flex-col gap-8 justify-between h-full transform transition-all ease-bounce duration-500 " + 
        `${inView ? 'opacity-100 translate-y-0' : 'opacity-10 translate-y-1/3'}`
      }>
        <div className="flex flex-col font-work space-y-4">
          <h3 className="text-lg md:text-xl font-medium text-dark">{serviceName}</h3>
          <p className="text-sm md:text-base text-dark">{serviceDescription}</p>
        </div>
        <div className="flex gap-6 justify-end items-center">
          {DownloadableForm && (
            <a href={DownloadableForm} className='cursor-pointer text-4xl text-primary' title='Download a printable form.' target='_blank'><TiDownload/></a>
          )}
          {isLoggedIn ? (
            <ApplicationForm _id={_id} service_name={serviceName} />
          ) : (
            <Button link path="/auth/signin" color="color" design="filled">
              Apply
              <FaLongArrowAltRight />
            </Button>
          )}
        </div>
      </div>
    );
  }

  const serviceCardForAdmins = () => {
    const [ref, inView] = useInView({ 
      threshold: 0.01,
      triggerOnce: true, 
    });


    return (
      <div ref={ref} className={
        "w-full bg-light-100 border-2 border-neutral-200 rounded-md mx-auto p-6 md:p-8 flex flex-col gap-8 justify-between h-full transform transition-all ease-bounce duration-500 " +
        `${inView ? 'opacity-100 translate-y-0' : 'opacity-10 translate-y-1/3'}`
      }>
        <div className="flex flex-col font-work space-y-4">
          <h3 className="text-lg md:text-xl font-medium text-dark">{serviceName}</h3>
          <p className="text-sm md:text-base text-dark">{serviceDescription}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {userType === 'villager' ? serviceCardForUsers() : serviceCardForAdmins()}
    </>
  )
}

export default ServiceCard
