import React from 'react'
import Skeleton from 'react-loading-skeleton'
import AuthContext from '../../contexts/auth/AuthContext';

interface ServiceCardSkeletonProps {
    count: number;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ count }) => {
    const { userType } = React.useContext(AuthContext);

    const ServiceCardForUsers: React.FC = () => {
        return (
            <div
                className={
                    "w-full bg-light-100 border-2 border-neutral-200 rounded-md mx-auto p-6 md:p-8 flex flex-col gap-8 justify-between h-full transform transition-all ease-bounce duration-500 opacity-100 translate-y-0"
                }
            >
                <div className="flex flex-col font-work space-y-4">
                    <Skeleton height={24} width="70%" />
                    <Skeleton height={18} width="90%" />
                    <Skeleton height={18} width="80%" />
                </div>
                <div className="flex gap-6 justify-end items-center">
                    <Skeleton circle height={40} width={40} />
                    <Skeleton height={40} width={100} />
                </div>
            </div>
        )
    }

    const ServiceCardForAdmins: React.FC = () => {
        return (
            <div
                className={
                    "w-full bg-light-100 border-2 border-neutral-200 rounded-md mx-auto p-6 md:p-8 flex flex-col gap-8 justify-between h-full transform transition-all ease-bounce duration-500 opacity-100 translate-y-0"
                }
            >
                <div className="flex flex-col font-work space-y-4">
                    <Skeleton height={24} width="70%" />
                    <Skeleton height={18} width="90%" />
                    <Skeleton height={18} width="80%" />
                </div>
            </div>
        )
    }

    return (
        <>
            {userType === 'villager' ?
                Array(count).fill(0).map((_, index) => (
                    <ServiceCardForUsers key={index} />
                )) :
                Array(count).fill(0).map((_, index) => (
                    <ServiceCardForAdmins key={index} />
                ))
            }
        </>
    )
}

export default ServiceCardSkeleton;
