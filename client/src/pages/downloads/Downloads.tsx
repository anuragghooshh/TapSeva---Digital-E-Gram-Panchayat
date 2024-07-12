import React from 'react'
import Hero from '../../components/hero/index'
import ServiceCard from '../../components/serviceCard/ServiceCard';
import Tabs from '../../components/tabs/index';
import { useSearchParams } from 'react-router-dom';
import ServiceContext from '../../contexts/service/ServiceContext';

const Downloads = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const { services } = React.useContext(ServiceContext);

  const displayedServices = categoryFilter ?
    services.filter(service => service.category === categoryFilter && service.DownloadableForm != 'NA')
    : services.filter(service => service.DownloadableForm != 'NA');

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
                  _id={service._id}
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
