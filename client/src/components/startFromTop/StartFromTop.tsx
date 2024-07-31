import React from 'react'
import { useLocation } from 'react-router-dom'

const StartFromTop = () => {
    const {pathname} = useLocation();

    React.useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname]);

    return null;
}

export default StartFromTop
