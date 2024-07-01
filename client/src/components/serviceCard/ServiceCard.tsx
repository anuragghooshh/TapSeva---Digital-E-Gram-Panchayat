import React from 'react'

interface ServiceCardProps {
  serviceName: string;
  serviceDescription: string;
  serviceType: number;
}

const ServiceCard = ({ serviceName, serviceDescription }: ServiceCardProps) => {
  return (
    <div className='
      font-work text-center w-full border border-primary py-14 px-8 rounded-lg bg-gray
      grid grid-cols-1 gap-10
    ' >
      <div className='flex-col space-y-4' >
        <h3 className='text-lg font-medium' >{serviceName}</h3>
        <p className='text-base ' >{serviceDescription}</p>
      </div>
      <button>View</button>
    </div>
  )
}

export default ServiceCard
