import React from 'react'

export interface HeroTitleProps{
    children : React.ReactNode;
}

const HeroTitle : React.FC<HeroTitleProps> = ({children}) => {
  return (
    <h1 className='text-6xl font-gyst font-medium text-light'>
      {children}
    </h1>
  )
}

export default HeroTitle
