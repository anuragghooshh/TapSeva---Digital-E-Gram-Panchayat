import Hero from '../../components/hero/Hero'
import about1 from '../../assets/images/aboutImg/about1.jpg'
import about2 from '../../assets/images/aboutImg/about2.jpg'
import aboutBG from '../../assets/images/aboutBg.jpg'

const About = () => {
  return (
    <div className='page' id='about'>
      <Hero imgSrc={aboutBG}>
        <Hero.Title>About Us</Hero.Title>
        <Hero.Subtitle>Empowering villagers through transparency and efficient service delivery.</Hero.Subtitle>
      </Hero>
      <section className="section" >
        <div className="max-w-7xl mx-auto">
          <p className="font-work text-dark text-sm md:text-base">
          Once upon a time in our cozy little Panchayat, the need for a modern solution became as clear as the chai in Anurag Ghosh's cup. With a flair for technology and a love for all things digital, 
          Anurag took on the challenge of bringing our Panchayat into the 21st century. The result? A website where you can easily apply for services, track your applications, and maybe even have a laugh along the way.
          </p>
        </div>
        <div className="mt-10 md:mt-20 max-w-7xl mx-auto flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
          <div className='w-full h-72 md:h-96 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url('${about1}')` }} />
          <div className='w-full h-72 md:h-96 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url('${about2}')` }} />
        </div>
        <div className="max-w-7xl mx-auto mt-10 md:mt-20">
          <p className="font-work text-dark text-sm md:text-base">
            Behind every great website is a great team, and ours is no exception. Our dedicated admins and staff are always ready to help you, whether you're navigating the application process or just here to enjoy the colorful design. 
            We're like the superheroes of the digital Panchayat world, minus the capes (but if you catch us on a good day, we might have tea towels over our shoulders).
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
