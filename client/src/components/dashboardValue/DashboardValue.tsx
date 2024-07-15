import React from 'react'

interface DashboardValueProps {
    value: number;
    label: string;
}

const DashboardValue: React.FC<DashboardValueProps> = ({ value, label }) => {
    return (
        <>
            <h3 className='font-work text-6xl' >{value}</h3>
            <p className='font-work mt-2 text-base font-mediu'>{label}</p>
        </>
    )
}

export default DashboardValue
