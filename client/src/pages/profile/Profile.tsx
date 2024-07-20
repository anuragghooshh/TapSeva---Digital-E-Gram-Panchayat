import React from 'react'
import Hero from '../../components/hero/index'
import Button from '../../components/button/Button';
import AuthContext from '../../contexts/auth/AuthContext';

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
                <Hero.Title>Good {getTimeOfDay()}, {userData.name.split(' ')[0]}!</Hero.Title>
                <Hero.SubTitle>View and manage your profile details here.</Hero.SubTitle>
            </Hero>

            <section className="py-10 md:py-16 lg:py-20">
                <div className='max-w-dsktp mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='bg-light-100 border border-gray-300 rounded-xl shadow-lg p-6 md:p-8 space-y-6'>
                        <ul className='space-y-4'>
                            <li className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                                <p className='text-lg font-semibold text-dark flex-shrink-0 w-36'>Name:</p>
                                <p className='text-lg font-medium text-dark'>{userData.name}</p>
                            </li>
                            <li className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                                <p className='text-lg font-semibold text-dark flex-shrink-0 w-36'>Email:</p>
                                <p className='text-lg font-medium text-dark'>{userData.email}</p>
                            </li>
                            <li className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                                <p className='text-lg font-semibold text-dark flex-shrink-0 w-36'>Phone:</p>
                                <p className='text-lg font-medium text-dark'>{userData.phone}</p>
                            </li>
                            <li className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                                <p className='text-lg font-semibold text-dark flex-shrink-0 w-36'>Address:</p>
                                <p className='text-lg font-medium text-dark'>{userData.address}</p>
                            </li>
                            <li className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                                <p className='text-lg font-semibold text-dark flex-shrink-0 w-36'>Aadhaar No:</p>
                                <p className='text-lg font-medium text-dark'>{userData.aadhaarNo}</p>
                            </li>
                            <li className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                                <p className='text-lg font-semibold text-dark flex-shrink-0 w-36'>Date of Birth:</p>
                                <p className='text-lg font-medium text-dark'>{userData.dob}</p>
                            </li>
                            <li className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                                <p className='text-lg font-semibold text-dark flex-shrink-0 w-36'>Marital Status:</p>
                                <p className='text-lg font-medium text-dark'>{userData.maritalStatus}</p>
                            </li>
                        </ul>
                        <Button design='filled'>Edit Details</Button>
                    </div>

                    <div className='mt-6'>
                        <Button design='stroked' onClick={logout}>Log Out</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profile
