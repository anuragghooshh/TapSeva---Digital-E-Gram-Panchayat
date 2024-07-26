import React from 'react'
import Hero from '../../components/hero/Hero'
import ApplicationCard from '../../components/application/ApplicationCard'
import ApplicationContext from '../../contexts/application/ApplicationContext'
import Dropdown from '../../components/dropdown/Dropdown'
import ApplicationDetailsModal from './ApplicationDetailsModal'

interface SortState {
  sortBy: string;
  order: string;
}

interface FilterState {
  status: string;
}

const Applications = () => {
  // Fetching applications from the context
  const { applications, setFiltersAndSorts } = React.useContext(ApplicationContext);

  const [selectedApplicationId, setSelectedApplicationId] = React.useState<string | null>(null);

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
        <Hero.Subtitle>Applications</Hero.Subtitle>
      </Hero>
      <section className="py-10 md:py-16 lg:py-20">
        <div className='max-w-dsktp mx-auto flex space-x-5 justify-end'>
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
          }
          {
            selectedApplicationId && (
              <ApplicationDetailsModal applicationId={selectedApplicationId} closeModal={() => setSelectedApplicationId(null)} />
            )
          }
        </div>
      </section>
    </div>
  )
}

export default Applications
