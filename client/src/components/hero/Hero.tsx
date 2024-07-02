import React from 'react'

export interface HeroProps {
    children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {
    return (
        <section
            className="w-full min-h-96 py-10 pb-20 flex items-end bg-img bg-cover bg-secondary"
        >
            <div className='w-full min-h-full px-20 flex flex-col space-y-5 justify-end items-start mx-auto'>
                {children}
            </div>
        </section>
    )
}

export default Hero
