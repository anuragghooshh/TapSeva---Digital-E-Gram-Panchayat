import React from 'react'
import Hero from '../../components/hero/Hero'
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
                <Hero.Subtitle>View and manage your profile details here.</Hero.Subtitle>
            </Hero>

            <section className="section">
                <div className="max-w-dsktp mx-auto">
                    <div className="p-5 font-work py-10 rounded-md grid grid-cols-1 md:p-10 md:grid-cols-3 gap-6 border border-neutral-200">
                        <div className="space-y-1 md:col-span-2">
                            <p className="text-xs lg:text-base font-semibold text-neutral-500 capitalize">Name</p>
                            <p className="text-base lg:text-lg font-medium text-dark">{userData.name}</p>
                        </div>
                        
                        <div className="space-y-1">
                            <p className="text-xs lg:text-base font-semibold text-neutral-500 capitalize">Sex</p>
                            <p className="text-base lg:text-lg font-medium text-dark">{userData.sex}</p>
                        </div>

                        <div className="space-y-1 md:col-span-2">
                            <p className="text-xs lg:text-base font-semibold text-neutral-500 capitalize">Email</p>
                            <p className="text-base lg:text-lg font-medium text-dark">{userData.email}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs lg:text-base font-semibold text-neutral-500 capitalize">Phone Number</p>
                            <p className="text-base lg:text-lg font-medium text-dark">{userData.phone}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs lg:text-base font-semibold text-neutral-500 capitalize">Date of Birth</p>
                            <p className="text-base lg:text-lg font-medium text-gray-900">{new Date(userData.dob).toDateString()}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs lg:text-base font-semibold text-neutral-500 capitalize">Aadhaar No.</p>
                            <p className="text-base lg:text-lg font-medium text-dark">{userData.aadhaarNo}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs lg:text-base font-semibold text-neutral-500 capitalize">Marital Status</p>
                            <p className="text-base lg:text-lg font-medium text-dark">{userData.maritalStatus}</p>
                        </div>
                        <div className="space-y-1 md:col-span-3">
                            <p className="text-xs lg:text-base font-semibold text-neutral-500 capitalize">Address</p>
                            <p className="text-base lg:text-lg font-medium text-dark">{userData.address}</p>
                        </div>
                    </div>
                    <div className="mt-10 grid gap-3 md:flex md:justify-end md:items-end md:gap-4">
                        {/* <Button design="filled">Edit Details</Button> */}
                        <Button design="stroked" onClick={logout}>Log Out</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profile
