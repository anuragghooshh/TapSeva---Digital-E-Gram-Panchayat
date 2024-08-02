import React from 'react'
import Hero from '../../components/hero/Hero'
import UpdateForm from '../../components/forms/UpdateForm';
import UpdateCard from '../../components/updateCard/UpdateCard';
import UpdateContext from '../../contexts/updates/UpdateContext';
import UpdateContextProvider from '../../contexts/updates/UpdateContextProvider';

const ListOfUpdates: React.FC = () => {
  const { updates } = React.useContext(UpdateContext);
  return (
    updates.length > 0 ?
      <div className='space-y-3'>
        {
          updates.map((update) => (
            <UpdateCard
              key={update._id}
              update={update.update}
              date={update.date ? update.date : new Date()}
              _id={update._id}
            />
          ))
        }
      </div> :
      <div className="text-center min-h-40 grid place-items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-gyst font-semibold text-neutral-300">No posted updates</h1>
      </div>
  );
}

const Updates = () => {
  return (
    <UpdateContextProvider>
      <div className='page' id='updates'>
        <Hero design='clean'>
          <Hero.Title>Updates</Hero.Title>
          <Hero.Subtitle>Post & Remove Updates with Ease</Hero.Subtitle>
        </Hero>
        <section className='section'>
          <div className='max-w-dsktp space-y-10 mx-auto'>
            <div className='flex items-end justify-end'>
              <UpdateForm />
            </div>
            <ListOfUpdates />
          </div>
        </section>
      </div>
    </UpdateContextProvider>
  )
}

export default Updates;