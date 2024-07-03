import React from 'react'
import Hero from '../../components/hero/index'
import ServiceCard from '../../components/serviceCard/ServiceCard';
import Tabs from '../../components/tabs/index';
import { useSearchParams } from 'react-router-dom';
import servicesList from '../../seeds/Services';

const Downloads = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');

  const displayedServices = categoryFilter ?
    servicesList.filter(service => service.category === categoryFilter && service.DownloadableForm != 'NA')
    : servicesList;

  return (
    <div className='page' id='downloads' >
      <Hero>
        <Hero.Title>Downloads</Hero.Title>
        <Hero.SubTitle>Download printable service forms which can be submitted offline to the Panchayat.</Hero.SubTitle>
      </Hero>
      <section className='py-20' >
        <div className='max-w-dsktp mx-auto' >
          <Tabs>
            <Tabs.Tab path='' >All</Tabs.Tab>
            <Tabs.Tab path='?category=General+Services' >General Services</Tabs.Tab>
            <Tabs.Tab path='?category=Citizen+Services' >Citizen Services</Tabs.Tab>
            <Tabs.Tab path='?category=Construction' >Construction</Tabs.Tab>
            <Tabs.Tab path='?category=Payments' >Payments</Tabs.Tab>
            <Tabs.Tab path='?category=Business+Services' >Business Services</Tabs.Tab>
          </Tabs>
          <div className='max-w-dsktp mx-auto mt-20 grid-cols-2 grid gap-5'>
            {
              displayedServices.map((service: any, index: number) => (
                <ServiceCard
                  key={index}
                  serviceName={service.service_name}
                  serviceDescription={service.description}
                  serviceType={service.category}
                  DownloadableForm={service.DownloadableForm != 'NA' ? true : false}
                />
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Downloads
