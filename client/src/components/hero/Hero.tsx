import React from 'react'

export interface HeroProps {
    children: React.ReactNode;
    design?: 'default' | 'clean';
}

const Hero: React.FC<HeroProps> = ({ children, design = 'default' }) => {
    return (
        <section
            className={`
                w-full flex items-end
                ${design === 'clean' ? 'text-dark pb-0 pt-40' : 'min-h-96 pt-10 pb-20 bg-img bg-cover text-light bg-secondary'}    
            `}
        >
            <div className='w-full min-h-full px-20 flex flex-col space-y-5 justify-end items-start mx-auto'>
                {children}
            </div>
        </section>
    )
}

export default Hero
