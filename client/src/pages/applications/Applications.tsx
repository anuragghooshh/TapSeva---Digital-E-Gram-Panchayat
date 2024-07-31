import React from 'react'
import Hero from '../../components/hero/Hero'
import ApplicationCard from '../../components/application/ApplicationCard'
import ApplicationContext from '../../contexts/application/ApplicationContext'
import Dropdown from '../../components/dropdown/Dropdown'

const Applications = () => {
  // Fetching applications from the context
  const { applications, setFiltersAndSorts } = React.useContext(ApplicationContext);

  // Filtering functions

  const filterByApproved = () => {
    const newFilter = { status: 'Approved' };
    setFiltersAndSorts(newFilter, {});
  }

  const filterByPending = () => {
    const newFilter = { status: 'Pending' };
    setFiltersAndSorts(newFilter, {});
  }

  const filterByRejected = () => {
    const newFilter = { status: 'Rejected' };
    setFiltersAndSorts(newFilter, {});
  }

  // Sorting functions

  const sortByCreatedAtDesc = () => {
    const newSort = { sortBy: 'createdAt', order: 'desc' };
    setFiltersAndSorts({}, newSort);
  }

  const sortByCreatedAtAsc = () => {
    const newSort = { sortBy: 'createdAt', order: 'asc' };
    setFiltersAndSorts({}, newSort);
  }

  return (
    <div className='page' id='applications'>
      <Hero design='clean'>
        <Hero.Title>Applications</Hero.Title>
        <Hero.Subtitle>View all the applications below</Hero.Subtitle>
      </Hero>
      <section className="section">
        <div className='max-w-dsktp mx-auto flex gap-3 justify-end'>
          <Dropdown>
            <Dropdown.Toggle>Sort By</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={sortByCreatedAtDesc}>Newest First</Dropdown.Item>
              <Dropdown.Item onClick={sortByCreatedAtAsc}>Oldest First</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>Filter</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={filterByApproved}>Approved</Dropdown.Item>
              <Dropdown.Item onClick={filterByPending}>Pending</Dropdown.Item>
              <Dropdown.Item onClick={filterByRejected}>Rejected</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='max-w-dsktp mx-auto' >
          {
            applications.length > 0 ? (
              applications.map((application) => (
                <ApplicationCard
                  key={application._id}
                  userId={application.userId}
                  serviceName={application.serviceName}
                  serviceId={application.serviceId}
                  createdAt={application.createdAt}
                  status={application.status}
                  _id={application._id}
                  currentOccupation={application.currentOccupation}
                  message={application.message}
                />
              ))
            ) : (
              <div className="text-center min-h-40 grid place-items-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-gyst font-semibold text-neutral-300">No such applications</h1>
              </div>
            )
          }
        </div>
      </section >
    </div >
  )
}

export default Applications
