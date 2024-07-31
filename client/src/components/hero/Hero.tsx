import React from 'react'

interface HeroProps {
    children: React.ReactNode;
    design?: 'default' | 'clean';
    imgSrc?: string
    size?: 'fill' | 'fit';
}

const HeroTitle: React.FC<HeroProps> = ({ children }) => {
    const lettersRef = React.useRef<(HTMLSpanElement | null)[]>([]);

    // Convert children to string and split into words and characters
    const textArray = React.Children.toArray(children)
        .flatMap(child =>
            typeof child === 'string'
                ? child.split(/(\s+)/) // Split by spaces while keeping spaces in the array
                : React.isValidElement(child) && child.type === 'br'
                    ? ['\n']
                    : []
        )
        .filter(Boolean); // Remove any empty strings

    React.useEffect(() => {
        lettersRef.current = lettersRef.current.slice(0, textArray.length);
    }, [textArray]);

    return (
        <h1 className="pb-2 text-4xl md:text-6xl text-center font-gyst font-medium overflow-hidden">
            {textArray.map((segment, index) =>
                segment === '\n' ? (
                    <br key={index} />
                ) : segment.trim() === '' ? (
                    <span key={index} className="whitespace-pre-wrap">
                        {' '}
                    </span>
                ) : (
                    <span key={index} className="inline-block mr-1">
                        {segment.split('').map((char, charIndex) => (
                            <span
                                key={charIndex}
                                className="animated-letter"
                                style={{ animationDelay: `${(charIndex / segment.length) * 0.8}s` }}
                                ref={el => (lettersRef.current[index * segment.length + charIndex] = el)}
                            >
                                {char}
                            </span>
                        ))}
                    </span>
                )
            )}
        </h1>
    );
}

const HeroSubTitle: React.FC<HeroProps> = ({ children }) => {
    return (
        <p className='font-work font-medium text-center text-base md:text-lg'>
            {children}
        </p>
    )
}


const Hero: React.FC<HeroProps> & {
    Title: React.FC<HeroProps>;
    Subtitle: React.FC<HeroProps>;
} = ({ children, design = 'default', imgSrc, size = 'fit' }) => {

    const sectionClasses = `
        w-full bg-light pt-navdsktp relative
        ${size === 'fill' ? 'min-h-0 lg:min-h-hero' : 'h-auto'}
    `;

    const divClasses = `
        w-full px-5 flex flex-col space-y-5 mx-auto rounded-md items-center justify-center
        ${design === 'clean'
            ? 'text-dark py-5'
            : imgSrc
                ? 'py-10 md:py-24 md:min-h-96 bg-img bg-cover text-light-100'
                : 'py-10 md:min-h-96 bg-img bg-cover text-light-100 bg-secondary'
        }
        ${size === 'fill' ? 'h-auto top-0 left-0 lg:h-full lg:absolute' : ''}
    `;

    const style = design === 'clean'
        ? {}
        : {
            backgroundImage: `url(${imgSrc})`,
            backgroundAttachment: 'fixed',
        };

    return (
        <section className={sectionClasses}>
            <div className={divClasses} style={style}>
                {children}
            </div>
        </section>
    );
};

Hero.Title = HeroTitle;
Hero.Subtitle = HeroSubTitle;

export default Hero