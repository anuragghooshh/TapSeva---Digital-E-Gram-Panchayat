import React from 'react'

export interface HeroProps {
    children: React.ReactNode;
    design?: 'default' | 'clean';
}

const Hero: React.FC<HeroProps> = ({ children, design = 'default' }) => {
    return (
        <section
            className={`
                w-full flex items-end py-5 bg-light pt-navdsktp  
            `}
        >
            <div className={`
                w-full p-10 flex flex-col space-y-5 justify-center items-center mx-auto
                ${design === 'clean' ? 'text-dark' :
                    'min-h-96 bg-img bg-cover text-light bg-secondary'
                }
            `}
            >
                {children}
            </div>
        </section>
    )
}

export default Hero
