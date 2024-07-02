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
      <section className='py-20' >
        <div className='max-w-dsktp mx-auto'>
          <p className='font-work text-dark text-base'>
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
        <div className="mt-20 max-w-dsktp mx-auto flex space-x-5">
          <div className='w-full h-96 bg-cover bg-no-repeat bg-center basis-4/12' style={{ backgroundImage: `url('${about1}')` }} />
          <div className='w-full h-96 bg-cover bg-no-repeat bg-center basis-9/12' style={{ backgroundImage: `url('${about2}')` }} />
        </div>
        <div className='max-w-dsktp mx-auto mt-20'>
          <p className='font-work text-dark text-base'>
            Nullam auctor, libero sit amet aliquam lacinia, nunc
            ligula condimentum purus, nec ultricies sapien turpis nec purus. Nullam auctor, libero
            sit amet aliquam lacinia, nunc ligula condimentum purus, nec ultricies sapien turpis nec
            purus. Nullam auctor, libero sit amet aliquam lacinia, nunc ligula condimentum purus, nec
            ultricies sapien turpis nec purus. Nullam auctor, libero sit amet aliquam lacinia, nunc
            ligula condimentum purus, nec ultricies sapien turpis nec purus. Nullam auctor, libero
            sit amet aliquam lacinia, nunc ligula condimentum purus, nec ultricies sapien turpis nec
            purus. Nullam auctor, libero sit amet aliquam lacinia, nunc ligula condimentum purus, nec
            ultricies sapien turpis nec purus. Nullam auctor, libero sit amet aliquam lacinia, nunc
            ligula condimentum purus, nec ultricies sapien turpis nec purus. Nullam auctor, libero
            sit amet aliquam lacinia, nunc ligula condimentum purus, nec ultricies sapien turpis nec
            pur
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
