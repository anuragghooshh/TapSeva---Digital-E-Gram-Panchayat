import React from 'react'
import Hero from '../../components/hero/Hero';
import AuthContext from '../../contexts/auth/AuthContext'
import '../../styles/dashboard.css';
import DashboardValue from '../../components/dashboardValue/DashboardValue'
import ApplicationContext from '../../contexts/application/ApplicationContext'
import ServiceContext from '../../contexts/service/ServiceContext'
import Button from '../../components/button/Button'
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { userData } = React.useContext(AuthContext);
  const { applicationStats, setFiltersAndSorts } = React.useContext(ApplicationContext);
  const { services, servicesStats } = React.useContext(ServiceContext);
  const [userCounts, setUserCounts] = React.useState({
    villager: 0,
    staff: 0,
    admin: 0,
  });
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchUserCounts = async () => {
      try {
        const response = await fetch('/api/admin/user-counts');
        const data = await response.json();
        setUserCounts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserCounts();
  }, []);

  const totalServices = services.length;
  const Navigate = useNavigate();

  const goToApprovedApplications = () => {
    setFiltersAndSorts({ status: 'Approved' }, {}).
    then(() => Navigate('applications')).
    catch((err) => console.log(err));
  }

  const goToPendingApplications = () => {
    setFiltersAndSorts({ status: 'Pending' }, {}).
    then(() => Navigate('applications')).
    catch((err) => console.log(err));
  }

  const goToRejectedApplications = () => {
    setFiltersAndSorts({ status: 'Rejected' }, {}).
    then(() => Navigate('applications')).
    catch((err) => console.log(err));
  }

  return (
    <div id='page' className='dashboard py-4'>
      <Hero design='clean'>
        <Hero.Title >Welcome back, {userData.name.split(' ')[0]}!</Hero.Title>
        <Hero.Subtitle>Here is what's happening today!</Hero.Subtitle>
      </Hero>
      <section className="py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-dsktp mx-auto">
          <div className="overview grid">
            <Link to="applications" className="bg-neutral-100 text-dark rounded-md px-4 py-5 hover:bg-neutral-200 ease-in-out duration-200 totalA">
              <DashboardValue value={applicationStats.totalApplications} label="Total Applications" />
            </Link>
            <div className="bg-neutral-100 text-dark  rounded-md px-4 py-5 hover:bg-neutral-200 ease-in-out duration-200 cursor-pointer pendingA" onClick={goToPendingApplications}>
              <DashboardValue value={applicationStats.pendingApplications} label="Pending Applications" />
            </div>
            <Link to="services" className="bg-neutral-100 text-dark  rounded-md px-4 py-5 hover:bg-neutral-200 ease-in-out duration-200 totalS">
              <DashboardValue value={totalServices} label="Total Services" />
            </Link>
            <div className="bg-positive-300 text-light-100   rounded-md px-4 py-5 hover:bg-positive-400 ease-in-out duration-200 cursor-pointer approvedA" onClick={goToApprovedApplications}>
              <DashboardValue value={applicationStats.approvedApplications} label="Approved Applications" />
            </div>
            <div className="bg-negative-300 text-light-100 rounded-md px-4 py-5 hover:bg-negative-400 ease-in-out duration-200 cursor-pointer rejectedA" onClick={goToRejectedApplications}>
              <DashboardValue value={applicationStats.rejectedApplications} label="Rejected Applications" />
            </div>
          </div>

          <div className="grid mt-5 gap-5 grid-cols-1 md:grid-cols-2">
            <div className="w-full bg-gray-100  rounded-md px-4 py-5">
              <h3 className="font-work text-xl md:text-2xl font-medium">User Management</h3>
              <div className="mt-5 grid gap-4">
                <DashboardValue value={userCounts.villager} label="Total Villagers" />
                <DashboardValue value={userCounts.staff} label="Total Staff" />
                <DashboardValue value={userCounts.admin} label="Total Admins" />
              </div>
            </div>
            <div className="w-full bg-gray-100  rounded-md px-4 py-5 flex flex-col items-end gap-4">
              <h3 className="font-work text-xl md:text-2xl font-medium w-full">Service Management</h3>
              <ul className="space-y-3 w-full">
                {servicesStats.map((service, index) => (
                  <li key={index} className="bg-light py-2 px-4 rounded-lg">
                    <p className="text-lg font-work font-medium text-dark">{service.category}</p>
                    <p className="text-sm font-work text-dark">Count: {service.count}</p>
                  </li>
                ))}
              </ul>
              <Button color='color' design='filled' link={true} path='/services'>View All Services</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
