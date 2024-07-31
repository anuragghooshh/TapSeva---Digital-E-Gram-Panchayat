// ServicesLayout Component
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Tabs from '../../components/tabs/Tabs';
import Hero from '../../components/hero/Hero';
import ServiceCard from '../../components/serviceCard/ServiceCard';
import ServiceContext from '../../contexts/service/ServiceContext';
import servicesBG from '../../assets/images/servicesBG.jpg';
import ServiceForm from '../../components/forms/ServiceForm/ServiceForm';
import AuthContext from '../../contexts/auth/AuthContext';

const ServicesLayout = () => {
    const { userType } = React.useContext(AuthContext);
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
                <Hero.Subtitle>Find helpful services to make life simpler and better.</Hero.Subtitle>
            </Hero>
            <section className="section">
                <div className='max-w-dsktp mx-auto'>
                    <div className='flex justify-end items-end flex-col gap-5 lg:flex-row lg:justify-between'>
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
                        {
                            userType === 'admin' && <ServiceForm />
                        }
                    </div>
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
                                                DownloadableForm={service.DownloadableForm !== 'NA' ? service.DownloadableForm : null}
                                                _id={service._id}
                                            />
                                        ))
                                    }
                                </div>
                            ) : (
                                <div className="text-center min-h-40 grid place-items-center">
                                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-gyst font-semibold text-neutral-300">No such services available</h1>
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