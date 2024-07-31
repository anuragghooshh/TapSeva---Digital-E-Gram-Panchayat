import React from 'react'

interface HamProps {
    task(e: any): void,
    activeStatus: string,
}

const Ham: React.FC<HamProps> = ({ task, activeStatus }) => {
    return (
        <button id="ham" title='Ham' onClick={task} className={`${activeStatus} after:bg-primary before:bg-primary`}>
            <div className='bg-primary'></div>
        </button>
    );
}

export default Ham
