import React from 'react'

interface DashboardValueProps {
    value: number;
    label: string;
}

const DashboardValue: React.FC<DashboardValueProps> = ({ value, label }) => {
    return (
        <>
            <h3 className="font-work text-4xl md:text-6xl">{value}</h3>
            <p className="font-work mt-2 text-sm md:text-base font-medium">{label}</p>
        </>
    )
}

export default DashboardValue
