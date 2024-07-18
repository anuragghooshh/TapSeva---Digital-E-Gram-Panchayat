import React from 'react'
import { Hero } from '../../components/hero'
import HeroTitle from '../../components/hero/HeroTitle'
import HeroSubTitle from '../../components/hero/HeroSubTitle'
import AuthContext from '../../contexts/auth/AuthContext'
import '../../styles/dashboard.css';
import DashboardValue from '../../components/dashboardValue/DashboardValue'
import ApplicationContext from '../../contexts/application/ApplicationContext'
import ServiceContext from '../../contexts/service/ServiceContext'
import Button from '../../components/button/Button'

const Dashboard = () => {
  const { userData } = React.useContext(AuthContext);
  const { applicationStats } = React.useContext(ApplicationContext);
  const { services, servicesStats } = React.useContext(ServiceContext);

  const totalServices = services.length;

  return (
    <div id='page' className='dashboard'>
      <Hero design='clean' >
        <HeroTitle>Welcome back {userData.name.split(' ')[0]}!</HeroTitle>
        <HeroSubTitle>Here's what's happening with your applications today</HeroSubTitle>
      </Hero>
      <section className='py-5 px-20'>
        <div className='max-w-dsktp mx-auto'>
          <div className='overview grid'>
            <div className="bg-neutral-100 text-dark border border-neutral-400 rounded-md px-5 py-5 totalA">
              <DashboardValue value={applicationStats.totalApplications} label='Total Applications' />
            </div>
            <div className="bg-neutral-100 text-dark border border-neutral-400 rounded-md px-5 py-5 pendingA">
              <DashboardValue value={applicationStats.pendingApplications} label='Pending Applications' />
            </div>
            <div className="bg-neutral-100 text-dark border border-neutral-400 rounded-md px-5 py-5 totalS">
              <DashboardValue value={totalServices} label='Total Services' />
            </div>
            <div className="bg-positive-300 text-light border border-positive-400 rounded-md px-5 py-5 approvedA">
              <DashboardValue value={applicationStats.approvedApplications} label='Approved Applications' />
            </div>
            <div className="bg-negative-300 text-light border border-negative-400 rounded-md px-5 py-5 rejectedA">
              <DashboardValue value={applicationStats.rejectedApplications} label='Rejected Applications' />
            </div>
          </div>

          <div className='grid mt-5 gap-5 grid-cols-2'>
            <div className="w-full bg-gray border border-primary rounded-md px-5 py-5">
              <h3 className='font-work text-2xl font-medium'>User Management</h3>
              <div className='mt-5 grid'>
                <DashboardValue value={5} label='Total Users' />
                <DashboardValue value={5} label='Total Admins' />
                <DashboardValue value={5} label='Total Villagers' />
              </div>
            </div>
            <div className="w-full bg-gray border border-primary rounded-md px-5 py-5 flex flex-col items-end gap-10">
              <h3 className='font-work text-2xl font-medium w-full'>Service Management </h3>
              <ul className='space-y-3 w-full'>
                {
                  servicesStats.map((service, index) => (
                    <li key={index} className='bg-light py-2 px-4 rounded-lg'>
                      <p className='text-xl font-work font-medium text-dark'>{service.category}</p>
                      <p className='text-base font-work text-dark'>Count : {service.count}</p>
                    </li>
                  ))
                }
              </ul>
              <Button>Check Services</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
