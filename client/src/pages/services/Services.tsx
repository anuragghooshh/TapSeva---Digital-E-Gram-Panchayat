// ServicesLayout Component
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Tabs from '../../components/tabs/Tabs';
import Hero from '../../components/hero/index';
import ServiceCard from '../../components/serviceCard/ServiceCard';
import ServiceContext from '../../contexts/service/ServiceContext';
import servicesBG from '../../assets/images/servicesBG.jpg';

const ServicesLayout = () => {
    const [searchParams] = useSearchParams();
    const categoryFilter = searchParams.get('category');

    const { services } = React.useContext(ServiceContext);

    const filteredServices = categoryFilter
        ? services.filter(service => service.category === categoryFilter)
        : services;

    const tabsData = [
        { label: 'All', path: '' },
        { label: 'General Services', path: '?category=General+Services' },
        { label: 'Citizen Services', path: '?category=Citizen+Services' },
        { label: 'Construction', path: '?category=Construction' },
        { label: 'Payments', path: '?category=Payments' },
        { label: 'Business Services', path: '?category=Business+Services' },
    ];

    return (
        <div className='page' id='services'>
            <Hero imgSrc={servicesBG}>
                <Hero.Title>Services</Hero.Title>
                <Hero.SubTitle>Choose from a wide range of services to make your life easier.</Hero.SubTitle>
            </Hero>
            <section className="py-10 md:py-16 lg:py-20">
                <div className='max-w-dsktp mx-auto'>
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
                        {filteredServices.length > 0 ?
                            (
                                <div className='grid-cols-1 grid gap-5 md:grid-cols-2'>
                                    {
                                        filteredServices.map((service, index) => (
                                            <ServiceCard
                                                key={index}
                                                serviceName={service.service_name}
                                                serviceDescription={service.description}
                                                serviceType={service.category}
                                                DownloadableForm={service.DownloadableForm !== 'NA'}
                                                _id={service._id}
                                            />
                                        ))
                                    }
                                </div>
                            ) : (
                                <div className="text-center">
                                    <h1 className="text-xl font-semibold text-gray-700">No Services Available</h1>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesLayout;