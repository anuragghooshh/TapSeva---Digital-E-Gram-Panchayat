import React from 'react'
import Hero from '../../components/hero/index'
import Button from '../../components/button/Button'
import ApplicationCard from '../../application/ApplicationCard'

const Applications = () => {
  return (
    <div className='page' id='applications'>
      <Hero design='clean'>
        <Hero.Title>Applications</Hero.Title>
        <Hero.SubTitle>Applications</Hero.SubTitle>
      </Hero>
      <section className='py-20'>
        <div className='max-w-dsktp mx-auto flex space-x-5 justify-end'>
          <Button>Sort By</Button>
          <Button>Filter</Button>
        </div>
        <div className='space-y-5' >
          <ApplicationCard/>
        </div>
      </section>
    </div>
  )
}

export default Applications
