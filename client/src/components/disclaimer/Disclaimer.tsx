import React from 'react'
import Button from '../button/Button';

const Disclaimer = () => {
    const [disclaimer, setDisclaimer] = React.useState(true);

    return (
        disclaimer ? (
            <div className='fixed bottom-0 left-0 right-0 bg-dark text-light-100 py-4 px-6 z-50 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8'>
                <p className='text-center lg:text-left font-work text-sm md:text-base leading-relaxed'>
                    For testing, no verification is needed. Otherwise, Anurag would use <span className='font-semibold text-primary'>Sendinblue with tokens</span>.
                    Users can <span className='font-semibold text-primary'>Sign in with Google</span> using the <span className='font-semibold text-primary'>same email they Signed up</span> with.
                    Thanks for understanding!
                </p>
                <div className='flex justify-center lg:justify-end mt-4 lg:mt-0'>
                    <Button color='light' onClick={() => { setDisclaimer(false) }}>Close</Button>
                </div>
            </div>
        ) : null
    );
}

export default Disclaimer
