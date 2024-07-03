import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Tabs from '../../components/tabs/index'
import Hero from '../../components/hero/index'
import ServiceCard from '../../components/serviceCard/ServiceCard'
import servicesList from '../../seeds/Services'

const ServicesLayout = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFilter = searchParams.get('category');

    const displayedServices = categoryFilter ? 
        servicesList.filter(service => service.category === categoryFilter) 
        : servicesList;

    return (
        <div className='page' id='services'>
            <Hero>
                <Hero.Title>Services</Hero.Title>
                <Hero.SubTitle>Choose from a wide range of services to make your life easier.</Hero.SubTitle>
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
                                    DownloadableForm = {service.DownloadableForm != 'NA' ? true : false}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesLayout
