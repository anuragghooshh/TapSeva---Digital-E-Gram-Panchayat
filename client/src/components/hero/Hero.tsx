import React from 'react'

interface HeroProps {
    children: React.ReactNode;
    design?: 'default' | 'clean';
    imgSrc?: string
    size?: 'fill' | 'fit';
}

const HeroTitle: React.FC<HeroProps> = ({ children }) => {
    const lettersRef = React.useRef<(HTMLSpanElement | null)[]>([]);

    // Convert children to string and split into characters
    const text = React.Children.toArray(children).join('');

    React.useEffect(() => {
        lettersRef.current = lettersRef.current.slice(0, text.length);
    }, [text]);

    return (
        <h1 className='pb-2 text-3xl md:text-6xl text-center font-gyst font-bold md:font-medium overflow-hidden'>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className={`animated-letter${char === ' ' ? ' whitespace' : ''}`}
                    style={{ animationDelay: `${(index / text.length) * 0.8}s` }}
                    ref={(el) => (lettersRef.current[index] = el)}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </h1 >
    )
}

const HeroSubTitle: React.FC<HeroProps> = ({ children }) => {
    return (
        <p className='font-work font-medium text-center text-sm md:text-base'>
            {children}
        </p>
    )
}


const Hero: React.FC<HeroProps> & {
    Title: React.FC<HeroProps>;
    Subtitle: React.FC<HeroProps>
} = ({ children, design = 'default', imgSrc }) => {
    return (
        <section className="w-full flex items-end py-5 bg-light pt-navdsktp">
            <div
                className={`w-full px-5 py-10 md:px-10 flex flex-col space-y-5 mx-auto rounded-md items-center justify-center
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

Hero.Title = HeroTitle;
Hero.Subtitle = HeroSubTitle;

export default Hero