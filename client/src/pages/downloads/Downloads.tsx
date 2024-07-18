import React from 'react'
import Hero from '../../components/hero/index'
import ServiceCard from '../../components/serviceCard/ServiceCard';
import Tabs from '../../components/tabs/Tabs';
import { useSearchParams } from 'react-router-dom';
import ServiceContext from '../../contexts/service/ServiceContext';

const Downloads = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const { services } = React.useContext(ServiceContext);

  const displayedServices = categoryFilter ?
    services.filter(service => service.category === categoryFilter && service.DownloadableForm != 'NA')
    : services.filter(service => service.DownloadableForm != 'NA');

  const tabsData = [
    { label: 'All', path: '' },
    { label: 'General Services', path: '?category=General+Services' },
    { label: 'Citizen Services', path: '?category=Citizen+Services' },
    { label: 'Construction', path: '?category=Construction' },
    { label: 'Payments', path: '?category=Payments' },
    { label: 'Business Services', path: '?category=Business+Services' },
  ];

  return (
    <div className='page' id='downloads' >
      <Hero>
        <Hero.Title>Downloads</Hero.Title>
        <Hero.SubTitle>Download printable service forms which can be submitted offline to the Panchayat.</Hero.SubTitle>
      </Hero>
      <section className='py-20' >
        <div className='max-w-dsktp mx-auto' >
          <Tabs>
            {
              tabsData.map((tab, index) => (
                <Tabs.Tab
                  key={index}
                  name={tab.label}
                  path={tab.path}
                >
                  {tab.label}
                </Tabs.Tab>
              ))
            }
          </Tabs>
          <div className='max-w-dsktp mx-auto mt-20 grid-cols-2 grid gap-5'>
            {
              displayedServices.length > 0 ? displayedServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  serviceName={service.service_name}
                  serviceDescription={service.description}
                  serviceType={service.category}
                  DownloadableForm={service.DownloadableForm !== 'NA'}
                  _id={service._id}
                />
              )) : <h1>No such Services</h1>
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Downloads
