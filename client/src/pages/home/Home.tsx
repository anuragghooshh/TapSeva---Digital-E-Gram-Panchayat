import React from 'react'
import Button from '../../components/button/Button'
import heroBg from '../../assets/images/heroBG.jpg'
import ServiceCard from '../../components/serviceCard/ServiceCard';

const Home = () => {
    // const [services, setServices] = React.useState([]);

    // const fetchServices = async () => {
    //     const res = await fetch('/api/services?featured=true')
    //     const data = await res.json()
    //     setServices(data);
    // }

    // React.useEffect(() => {
    //     fetchServices();
    // }, []);

    const services = [
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
            "_id": "667ff8727b60fc99aeabfd22",
            "service_name": "Birth Certificate Application",
            "description": "Apply for a new birth certificate or a duplicate copy. Required documents may include hospital birth records, parent ID proofs etc.",
            "category": "General Services",
            "DownloadableForm": "",
            "featured": true,
            "applicants": 0,
            "__v": 0
        }
    ]

    return (
        <div className='page w-full' id='home'>
            <section
                className="w-full min-h-hero py-10 pb-20 flex items-end bg-img bg-cover"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className='w-full min-h-full px-20 flex flex-col space-y-10 justify-end items-start mx-auto'>
                    <h1 className='text-6xl font-gyst font-medium text-light'>
                        Empowering Your Village<br />with Digital Convenience.
                    </h1>
                    <Button>Browse Services</Button>
                </div>
            </section>

            <section className="py-20 px-20">
                <h2 className='text-5xl font-gyst font-medium text-dark text-center '>Featured Services</h2>
                <div>
                    {
                        services.map((service: any, index: number) => (
                            <ServiceCard
                                key={index}
                                serviceName={service.service_name}
                                serviceDescription={service.description}
                                serviceType={service.category}
                            />
                        ))
                    }
                </div>
            </section>
            <section className="py-20 px-20">
                <h2 className='text-5xl font-gyst font-medium text-dark text-center '>Important Updates</h2>
            </section>
        </div>
    )
}

export default Home
