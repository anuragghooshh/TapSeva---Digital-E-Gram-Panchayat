import React from 'react'
import Button from '../../components/button/Button'
import heroBg from '../../assets/images/heroBG.jpg'
import ServiceCard from '../../components/serviceCard/ServiceCard';
import ServiceContext from '../../contexts/service/ServiceContext';

const Home = () => {
    const { services } = React.useContext(ServiceContext);
    const featuredServices = services.filter(service => service.featured === true);

    return (
        <div className='page w-full' id='home'>
            <section
                className="w-full min-h-dvh py-10 pb-20 flex items-end bg-img bg-cover"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className='w-full min-h-full px-20 flex flex-col space-y-10 justify-end items-start mx-auto'>
                    <h1 className='text-6xl font-gyst font-medium text-light'>
                        Empowering Your Village<br />with Digital Convenience.
                    </h1>
                    <Button color='light' design='stroked'>Browse Services</Button>
                </div>
            </section>

            <section className="py-20 px-20 pt-32">
                <h2 className='text-5xl font-gyst font-medium text-dark text-center'>Featured Services</h2>
                <div className='max-w-dsktp mx-auto mt-20 grid-cols-2 grid gap-5' >
                    {
                        featuredServices.map((service: any, index: number) => (
                            <ServiceCard
                                _id={service._id}
                                key={index}
                                serviceName={service.service_name}
                                serviceDescription={service.description}
                                serviceType={service.category}
                                DownloadableForm={service.DownloadableForm != 'NA' ? true : false}
                            />
                        ))
                    }
                </div>
            </section>
            <section className="py-20 px-20 bg-gray">
                <h2 className='text-5xl font-gyst font-medium text-dark text-center '>Important Updates</h2>
            </section>
        </div>
    )
}

export default Home
