import React from 'react'

export interface HeroSubTitleProps{
    children : React.ReactNode;
}

const HeroSubTitle : React.FC<HeroSubTitleProps> = ({children}) => {
  return (
    <p className='text-light font-work font-medium'>
      {children}
    </p>
  )
}

export default HeroSubTitle
