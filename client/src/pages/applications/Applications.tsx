import React from 'react'
import Hero from '../../components/hero/index'
import Button from '../../components/button/Button'
import ApplicationCard from '../../components/application/ApplicationCard'
import ApplicationContext from '../../contexts/application/ApplicationContext'

const Applications = () => {
  const { applications } = React.useContext(ApplicationContext);

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
          {
            applications.map((application, index) => (
              <ApplicationCard
                key={application._id}
                userId={application.userId}
                serviceName={application.serviceName}
                createdAt={application.createdAt}
                status={application.status}
                applicationId={application._id}
              />
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Applications
