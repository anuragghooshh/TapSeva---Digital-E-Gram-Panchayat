import React from 'react'
import Button from '../../components/button/Button'
import heroBg from '../../assets/images/heroBG.jpg'
import ServiceCard from '../../components/serviceCard/ServiceCard';
import ServiceContext from '../../contexts/service/ServiceContext';
import Hero from '../../components/hero/Hero';
import UpdateInterface from '../../interfaces/UpdateInterface';
import fetchUpdates from '../../services/FetchUpdates';

const Home = () => {
    const [updates, setUpdates] = React.useState<UpdateInterface[]>([]);
    const { services } = React.useContext(ServiceContext);
    const featuredServices = services.filter(service => service.featured === true);

    React.useEffect(() => {
        fetchUpdates().then((data) => {
            setUpdates(data);
        });
    }, []);


    return (
        <div className='page w-full' id='home'>
            <Hero imgSrc={heroBg} size='fill'>
                <Hero.Title>Empowering Your Village<br />with Digital Convenience.</Hero.Title>
                <Hero.Subtitle>Check out our most popular services</Hero.Subtitle>
                <Button color='light' link={true} path='services' design='stroked'>Browse Services</Button>
            </Hero>
            <section className="section-lg">
                <div>
                    <h2 className='text-3xl font-gyst font-medium text-dark text-center md:text-5xl'>Featured Services</h2>
                    <p className='font-work text-center text-sm md:text-base text-dark mt-5'>Check out our most popular services</p>
                </div>
                <div className='max-w-dsktp mx-auto mt-16 lg:mt-20 grid-cols-1 grid gap-5 md:grid-cols-2' >
                    {
                        featuredServices.map((service: any, index: number) => (
                            <ServiceCard
                                _id={service._id}
                                key={index}
                                serviceName={service.service_name} 
                                serviceDescription={service.description}
                                serviceType={service.category}
                                DownloadableForm={service.DownloadableForm != 'NA' ? service.DownloadableForm : null}
                            />
                        ))
                    }
                </div>
            </section>
            <section className="section py-10 md:py-16 lg:py-20 bg-gray-100 rounded-md">
                <div className='w-full max-w-dsktp px-10 mx-auto space-y-10'>
                    <h2 className='text-3xl md:text-5xl font-gyst font-medium text-dark text-center '>Important Updates</h2>
                    <ul className='list-disc'>
                        {
                            updates.map((update) => (
                                <li key={update._id} className='text-left mt-5'>
                                    <p className='text-sm lg:text-base font-medium text-secondary'>{new Date(update.date ?? "").toDateString()}</p>
                                    <p className='text-base lg:text-lg text-dark lg:font-medium '>{update.update}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Home
