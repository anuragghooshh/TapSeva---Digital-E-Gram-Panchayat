import React from 'react'

export interface HeroTitleProps{
    children : React.ReactNode;
}

const HeroTitle : React.FC<HeroTitleProps> = ({children}) => {
  return (
    <h1 className='text-3xl md:text-6xl font-gyst font-bold md:font-medium'>
      {children}
    </h1>
  )
}

export default HeroTitle
