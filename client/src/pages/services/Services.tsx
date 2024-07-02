import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Tabs from '../../components/tabs/index'
import Hero from '../../components/hero/index'
import ServiceCard from '../../components/serviceCard/ServiceCard'

const ServicesLayout = () => {
    const servicesList = [
        {
            "_id": "667ff8727b60fc99aeabfd24",
            "service_name": "Marriage Certificate Application",
            "description": "Apply for a marriage certificate. Required documents may include marriage invitation, wedding photographs, ID proofs of bride and groom etc.",
            "category": "General Services",
            "DownloadableForm": "",
            "featured": true,
            "applicants": 0,
            "__v": 0
        },
        {
            "_id": "667ff8727b60fc99aeabfd25",
            "service_name": "Income Certificate Application",
            "description": "Apply for an income certificate. Required documents may vary depending on your income source (salary slips, bank statements etc.)",
            "category": "Citizen Services",
            "DownloadableForm": "NA",
            "featured": false,
            "applicants": 0,
            "__v": 0
        },
        {
            "_id": "667ff8727b60fc99aeabfd26",
            "service_name": "Ration Card Application",
            "description": "Apply for a new ration card or update an existing one. Required documents may include address proof, ID proofs of family members etc.",
            "category": "Citizen Services",
            "DownloadableForm": "NA",
            "featured": true,
            "applicants": 0,
            "__v": 0
        },
        {
            "_id": "667ff8727b60fc99aeabfd27",
            "service_name": "Building Permit Application",
            "description": "Apply for a permit to construct a new building or renovate an existing one. Required documents may include architectural plans, land ownership proof etc.",
            "category": "Construction",
            "DownloadableForm": "",
            "featured": false,
            "applicants": 0,
            "__v": 0
        },
        {
            "_id": "667ff8727b60fc99aeabfd23",
            "service_name": "Death Certificate Application",
            "description": "Apply for a death certificate. Required documents may include death certificate from hospital, deceased ID proof etc.",
            "category": "General Services",
            "DownloadableForm": "",
            "featured": true,
            "applicants": 0,
            "__v": 0
        },
        {
            "_id": "667ff8727b60fc99aeabfd29",
            "service_name": "Property Tax Payment",
            "description": "Pay your annual property tax online or through designated centers.",
            "category": "Payments",
            "DownloadableForm": "NA",
            "featured": false,
            "applicants": 0,
            "__v": 0
        },
        {
            "_id": "667ff8727b60fc99aeabfd2a",
            "service_name": "Grievance Redressal",
            "description": "Register a complaint regarding a government service. You can provide details online or visit the grievance redressal cell.",
            "category": "Citizen Feedback",
            "DownloadableForm": "NA",
            "featured": false,
            "applicants": 0,
            "__v": 0
        },
        {
            "_id": "667ff8727b60fc99aeabfd22",
            "service_name": "Birth Certificate Application",
            "description": "Apply for a new birth certificate or a duplicate copy. Required documents may include hospital birth records, parent ID proofs etc.",
            "category": "General Services",
            "DownloadableForm": "",
            "featured": true,
            "applicants": 0,
            "__v": 0
        },
        {
            "_id": "667ff8727b60fc99aeabfd28",
            "service_name": "Trade License Application",
            "description": "Apply for a license to operate a business. Required documents may include business registration documents, ID proof of owner etc.",
            "category": "Business Services",
            "DownloadableForm": "",
            "featured": false,
            "applicants": 0,
            "__v": 0
        }
    ]

    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFilter = searchParams.get('category');

    const displayedServices = categoryFilter ? 
        servicesList.filter(service => service.category === categoryFilter) 
        : servicesList;

    return (
        <div className='page bg-light' id='services'>
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
