"use client"

import { CustombuttonProps } from '@/types'
import React from 'react'

const Custombutton = ({title,ContainerStyle,handleClick}:CustombuttonProps)=> {
  return (
    <button disabled={false} type={'button'} className={'custom-btn ${ContainerStyle}'}
    onClick={handleClick}
    >
        <span className={'flex-1'}>
            {title}</span>
    </button>
  )
}

export default Custombutton
