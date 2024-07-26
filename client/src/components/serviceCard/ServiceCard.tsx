import React from 'react'
import { FaDownload, FaFileDownload, FaLongArrowAltRight } from 'react-icons/fa'
import Button from '../button/Button';
import AuthContext from '../../contexts/auth/AuthContext';
import ApplicationFormContext from '../../contexts/applicationForm/ApplicationFormContext';
import { BiDownload } from 'react-icons/bi';
import { BsDownload } from 'react-icons/bs';
import { GoDownload } from 'react-icons/go';
import { IoDownload } from 'react-icons/io5';
import { GrDownload, GrDownloadOption } from 'react-icons/gr';
import { RiDownload2Fill } from 'react-icons/ri';
import { RxDownload } from 'react-icons/rx';
import { TiDownload } from 'react-icons/ti';

interface ServiceCardProps {
  _id: string;
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  DownloadableForm?: boolean;
}

const ServiceCard = ({ _id, serviceName, serviceDescription, DownloadableForm }: ServiceCardProps) => {
  const { isLoggedIn, userType } = React.useContext(AuthContext);
  const { openForm } = React.useContext(ApplicationFormContext);

  const serviceCardForUsers = () => {
    return (
      <div className="w-full bg-light-100 shadow-gray-100 shadow-lg border border-gray-200 rounded-md mx-auto p-6 md:p-8 flex flex-col gap-8 justify-between h-full">
        <div className="flex flex-col font-work space-y-4">
          <h3 className="text-lg md:text-xl font-medium text-dark">{serviceName}</h3>
          <p className="text-sm md:text-base text-dark">{serviceDescription}</p>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-end mt-auto">
          {DownloadableForm && (
            <button className='cursor-pointer' title='Download a printable form.'><TiDownload color='#8AB740' size={32}/></button>
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
    );
  }

  const serviceCardForAdmins = () => {
    return (
      <div className="w-full bg-light-100 shadow-gray-100 shadow-lg border border-gray-200 rounded-md mx-auto p-6 md:p-8 flex flex-col gap-8 justify-between h-full">
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
