import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Button from '../button/Button';
import AuthContext from '../../contexts/auth/AuthContext';
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
      <div className="w-full bg-light-100 shadow-gray-100 shadow-lg border border-gray-200 rounded-md mx-auto p-6 md:p-8 flex flex-col gap-8 justify-between h-full">
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg md:text-xl font-medium text-dark">{serviceName}</h3>
          <p className="text-sm md:text-base text-dark">{serviceDescription}</p>
        </div>
        <div className="flex flex-col gap-2 md:gap-2 lg:flex-row lg:justify-end lg:gap-2 mt-auto">
          {DownloadableForm && (
            <Button color="color" design="stroked">
              Download
            </Button>
          )}
          {isLoggedIn ? (
            <Button onClick={() => openForm(_id, serviceName)} color="color" design="filled">
              Apply
              <FaLongArrowAltRight />
            </Button>
          ) : (
            <Button link path="/auth/signin" color="color" design="filled">
              Apply
              <FaLongArrowAltRight />
            </Button>
          )}
        </div>
      </div>
      {/* {selectedService && <ApplicationForm serviceName={serviceName} serviceId={_id} />} */}
    </>
  )
}

export default ServiceCard
