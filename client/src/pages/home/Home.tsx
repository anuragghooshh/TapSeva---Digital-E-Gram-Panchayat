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
                className="w-full min-h-screen pb-20 pt-navdsktp flex md:min-h-0 md:pb-0 lg:min-h-screen lg:pb-5"
            >
                <div
                    className='
                        w-full min-h-full flex flex-col p-10 space-y-10 justify-center items-center mx-auto
                        bg-cover bg-center bg-no-repeat md:py-24
                    '
                    style={{ backgroundImage: `url(${heroBg})`, backgroundAttachment: 'fixed' }}
                >
                    <h1 className='text-lg text-center font-gyst font-medium text-light md:text-6xl'>
                        Empowering Your Village<br />with Digital Convenience.
                    </h1>
                    <Button color='light' design='stroked'>Browse Services</Button>
                </div>

            </section>

            <section className="py-20 pt-32">
                <div>
                    <h2 className='text-5xl font-gyst font-medium text-dark text-center'>Featured Services</h2>
                    <p className='font-work text-center text-dark mt-5'>Check out our most popular services</p>
                </div>
                <div className='max-w-dsktp mx-auto mt-20 grid-cols-1 grid gap-5 md:grid-cols-2' >
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
            <section className="">
                <div className='w-full py-20 bg-gray'>
                    <h2 className='text-5xl font-gyst font-medium text-dark text-center '>Important Updates</h2>
                </div>
            </section>
        </div>
    )
}

export default Home
