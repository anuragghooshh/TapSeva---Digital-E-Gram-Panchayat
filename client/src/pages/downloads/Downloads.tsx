import React from 'react'
import Hero from '../../components/hero/Hero'
import ServiceCard from '../../components/serviceCard/ServiceCard';
import Tabs from '../../components/tabs/Tabs';
import { useSearchParams } from 'react-router-dom';
import ServiceContext from '../../contexts/service/ServiceContext';
import downloadsBG from '../../assets/images/downloadsBG.jpg';
import ServiceCardSkeleton from '../../components/serviceCard/ServiceCardSkeleton';

const Downloads = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const { services, loading } = React.useContext(ServiceContext);

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
    { label: 'Citizen Feedback', path: '?category=Citizen+Feedback' },
  ];

  return (
    <div className='page' id='downloads' >
      <Hero imgSrc={downloadsBG}>
        <Hero.Title>Downloads</Hero.Title>
        <Hero.Subtitle>Download printable service forms which can be submitted offline to the Panchayat.</Hero.Subtitle>
      </Hero>
      <section className="section" >
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
          <div className='max-w-dsktp mx-auto mt-16 lg:mt-20'>
            <div className='max-w-dsktp mx-auto mt-16 lg:mt-20 grid-cols-1 grid gap-5 md:grid-cols-2' >
              {
                loading ? (
                  <ServiceCardSkeleton count={6} />
                ) : displayedServices.length > 0 ? (
                  displayedServices.map((service, index) => (
                    <ServiceCard
                      key={index}
                      serviceName={service.service_name}
                      serviceDescription={service.description}
                      serviceType={service.category}
                      DownloadableForm={service.DownloadableForm !== 'NA' ? service.DownloadableForm : null}
                      _id={service._id}
                    />
                  ))
                ) : (
                  <div className="md:col-span-2 text-center min-h-40 grid place-items-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-gyst font-semibold text-neutral-300">No such downloads available</h1>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Downloads
