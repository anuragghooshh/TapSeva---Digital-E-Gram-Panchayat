import React from 'react'
import Hero from '../../components/hero/Hero'
import UserCard from '../../components/userCard/UserCard';
import UserContext from '../../contexts/user/UserContext';
import UserContextProvider from '../../contexts/user/UserContextProvider';

const ListOfUsers: React.FC = () => {
    const { users } = React.useContext(UserContext);

    return (
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                users.map((user, index) => (
                    <li key={index}>
                        <UserCard
                            user={user}
                            removeUser={() => { console.log("It would have been removed") }}
                        />
                    </li>
                ))
            }
        </ul>
    )
}

const Users = () => {
    return (
        <div className='page'>
            <Hero design='clean'>
                <Hero.Title >Users</Hero.Title>
                <Hero.Subtitle>View all the users below</Hero.Subtitle>
            </Hero>
            <section className='section'>
                <div className='max-w-dsktp mx-auto'>
                    <UserContextProvider>
                        <ListOfUsers />
                    </UserContextProvider>
                </div>
            </section>
        </div>
    )
}

export default Users
