import Skeleton from 'react-loading-skeleton'

interface ApplicationCardSkeletonProps {
    count: number;
}

const ApplicationCardSkeleton: React.FC<ApplicationCardSkeletonProps> = ({ count }) => {
    return (
        Array(count).fill(0).map((_, index) => (
            <div key={index} className="bg-light-100 w-full max-w-dsktp border-2 border-neutral-200 mx-auto mt-5 p-6 sm:p-8 md:p-10 space-y-8 md:space-y-10 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="application-id md:col-span-3 lg:col-span-1">
                        <Skeleton count={1} height={24} width="50%" />
                        <Skeleton height={20} width="80%" />
                    </div>
                    <div className="application-date">
                        <Skeleton height={24} width="50%" />
                        <Skeleton height={20} width="60%" />
                    </div>
                    <div className="service-name md:col-span-2 lg:col-span-1">
                        <Skeleton height={24} width="50%" />
                        <Skeleton height={20} width="70%" />
                    </div>
                    <div className="status">
                        <Skeleton height={24} width="50%" />
                        <Skeleton height={20} width="40%" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <Skeleton height={20} width="100%" />
                    <div className="w-full grid gap-2 md:flex md:items-end md:justify-end">
                        <Skeleton height={40} width={100} />
                        <Skeleton height={40} width={100} />
                    </div>
                </div>
            </div>
        ))
    )
}

export default ApplicationCardSkeleton
