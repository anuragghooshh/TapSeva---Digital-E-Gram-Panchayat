import React from 'react'
import Hero from '../../components/hero/index'
import { AuthContext } from '../../contexts/AuthContextProvider';
import Button from '../../components/button/Button';

const Profile = () => {
    const { userData, logout } = React.useContext(AuthContext);

    const getTimeOfDay = () => {
        const currentHour = new Date().getHours();
        let timeOfDay;

        if (currentHour >= 5 && currentHour < 12) {
            timeOfDay = "Morning";
        } else if (currentHour >= 12 && currentHour < 17) {
            timeOfDay = "Afternoon";
        } else if (currentHour >= 17 && currentHour < 20) {
            timeOfDay = "Evening";
        } else {
            timeOfDay = "Night";
        }
        return timeOfDay;
    };

    return (
        <div className='page' id='profile'>
            <Hero design='clean'>
                <Hero.Title>Good {getTimeOfDay()}, {userData.name.split(' ')[0]}.</Hero.Title>
                <Hero.SubTitle>View and edit your profile details here.</Hero.SubTitle>
            </Hero>
            <section className='py-20'>
                <div className='max-w-dsktp mx-auto space-y-10'>
                    <div className='w-full p-10 border-2 border-gray rounded-xl flex flex-col gap-10 items-end'>
                        <ul className='w-full space-y-6'>
                            <li className='flex items-center gap-5'>
                                <p className='text-xl font-work font-medium text-dark'>Name:</p>
                                <p className='text-xl font-work font-medium text-dark'>{userData.name}</p>
                            </li>
                            <li className='flex items-center gap-5'>
                                <p className='text-xl font-work font-medium text-dark'>Email:</p>
                                <p className='text-xl font-work font-medium text-dark'>{userData.email}</p>
                            </li>
                            <li className='flex items-center gap-5'>
                                <p className='text-xl font-work font-medium text-dark'>Phone:</p>
                                <p className='text-xl font-work font-medium text-dark'>{userData.phone}</p>
                            </li>
                            <li className='flex items-center gap-5'>
                                <p className='text-xl font-work font-medium text-dark'>Email:</p>
                                <p className='text-xl font-work font-medium text-dark'>{userData.address}</p>
                            </li>
                            <li className='flex items-center gap-5'>
                                <p className='text-xl font-work font-medium text-dark'>aadhaar No:</p>
                                <p className='text-xl font-work font-medium text-dark'>{userData.aadhaarNo}</p>
                            </li>
                            <li className='flex items-center gap-5'>
                                <p className='text-xl font-work font-medium text-dark'>Date of Birth:</p>
                                <p className='text-xl font-work font-medium text-dark'>{userData.dob}</p>
                            </li>
                            <li className='flex items-center gap-5'>
                                <p className='text-xl font-work font-medium text-dark'>Marital Status:</p>
                                <p className='text-xl font-work font-medium text-dark'>{userData.maritalStatus}</p>
                            </li>
                        </ul>
                        <Button>Edit Details</Button>
                    </div>
                    <Button design='stroked' onClick={logout}>Log Out</Button>
                </div>
            </section>
        </div>
    )
}

export default Profile
