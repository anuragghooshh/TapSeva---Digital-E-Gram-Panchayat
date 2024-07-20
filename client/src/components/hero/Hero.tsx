import React from 'react'

export interface HeroProps {
    children: React.ReactNode;
    design?: 'default' | 'clean';
    imgSrc?: string
}

const Hero: React.FC<HeroProps> = ({ children, design = 'default', imgSrc }) => {
    return (
        <section className="w-full flex items-end py-5 bg-light pt-navdsktp">
            <div
                className={`w-full px-5 py-10 md:px-10 flex flex-col space-y-5 justify-center items-center mx-auto text-center rounded-md
          ${design === 'clean' ? 'text-dark' : imgSrc ? 'md:py-24 md:min-h-96 bg-img bg-cover text-light-100' : 'md:min-h-96 bg-img bg-cover text-light-100 bg-secondary'}
        `}
                style={
                    design === 'clean'
                        ? {}
                        : {
                            backgroundImage: `url(${imgSrc})`,
                            backgroundAttachment: 'fixed',
                        }
                }
            >
                {children}
            </div>
        </section>
    )
}

export default Hero
