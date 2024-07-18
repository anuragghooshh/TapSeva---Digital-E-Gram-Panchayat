import React from 'react'
import '../../styles/ham.css';

interface HamProps {
    task(e: any): void,
    activeStatus: string,
}

const Ham: React.FC<HamProps> = ({ task, activeStatus }) => {
    return (
        <button id="ham" title='Ham' onClick={task} className={activeStatus}>
            <div></div>
        </button>
    );
}

export default Ham
