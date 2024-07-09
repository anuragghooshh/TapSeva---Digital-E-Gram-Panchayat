import React from 'react'

export interface HeroSubTitleProps{
    children : React.ReactNode;
}

const HeroSubTitle : React.FC<HeroSubTitleProps> = ({children}) => {
  return (
    <p className='font-work font-medium'>
      {children}
    </p>
  )
}

export default HeroSubTitle
