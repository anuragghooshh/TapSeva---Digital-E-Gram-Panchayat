import React from 'react'
import Hero from '../../components/hero/index'
import about1 from '../../assets/images/aboutImg/about1.jpg'
import about2 from '../../assets/images/aboutImg/about2.jpg'

const About = () => {
  return (
    <div className='page' id='about'>
      <Hero>
        <Hero.Title>About Us</Hero.Title>
        <Hero.SubTitle>Empowering villagers through transparency and efficient service delivery.</Hero.SubTitle>
      </Hero>
      <section className="py-10 md:py-16 lg:py-20" >
        <div className="max-w-7xl mx-auto">
          <p className="font-work text-dark text-base md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, libero sit amet
            aliquam lacinia, nunc ligula condimentum purus, nec ultricies sapien turpis nec purus.
            Nullam auctor, libero sit amet aliquam lacinia, nunc ligula condimentum purus, nec
            ultricies sapien turpis nec purus. Nullam auctor, libero sit amet aliquam lacinia, nunc
            ligula condimentum purus, nec ultricies sapien turpis nec purus. Nullam auctor, libero
            sit amet aliquam lacinia, nunc ligula condimentum purus, nec ultricies sapien turpis nec
            purus. Nullam auctor, libero sit amet aliquam lacinia, nunc ligula condimentum purus, nec
            ultricies sapien turpis nec purus.
          </p>
        </div>
        <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
          <div className='w-full h-72 md:h-96 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url('${about1}')` }} />
          <div className='w-full h-72 md:h-96 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url('${about2}')` }} />
        </div>
        <div className="max-w-7xl mx-auto mt-20">
          <p className="font-work text-dark text-base md:text-lg lg:text-xl">
            Nullam auctor, libero sit amet aliquam lacinia, nunc ligula condimentum purus, nec ultricies sapien turpis nec purus. Nullam auctor, libero sit amet aliquam lacinia, nunc ligula condimentum purus, nec ultricies sapien turpis nec purus. Nullam auctor, libero sit amet aliquam lacinia, nunc ligula condimentum purus, nec ultricies sapien turpis nec purus. Nullam auctor, libero sit amet aliquam lacinia, nunc ligula condimentum purus, nec ultricies sapien turpis nec purus. Nullam auctor, libero sit amet aliquam lacinia, nunc ligula condimentum purus, nec ultricies sapien turpis nec purus. Nullam auctor, libero sit amet aliquam lacinia, nunc ligula condimentum purus, nec ultricies sapien turpis nec purus. Nullam auctor, libero sit amet aliquam lacinia, nunc ligula condimentum purus, nec ultricies sapien turpis nec purus. Nullam auctor, libero sit amet aliquam lacinia, nunc ligula condimentum purus, nec ultricies sapien turpis nec pur.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
