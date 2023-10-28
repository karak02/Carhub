"use client"

import React from 'react'
import Image from 'next/image'
import Custombutton  from './Custombutton'

function Hero() {
    const handleScroll=()=>{

    }
  return (
    <div className='hero'>
     <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero_title'>
            You can Find , Book , rent a car - easily!
        </h1>
        <p className='hero__subtitle'>
           Stremline your car rental exprience <br/>
           with our effortless booking process. 
        </p>
       <Custombutton 
       title = "Explore Cars"
       ContainerStyle="bg-secondary-orange text-while
       rounded-full mt-10"
       handleClick={handleScroll}
       />
     </div>
     <div className='hero__image-container'>
        <div className='hero__image'>
            <Image src="/Group 39.png" alt="hero"
            fill className="object-contain" />
        </div>
     </div>
    </div>
  )
}

export default Hero
