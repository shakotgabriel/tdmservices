import React from 'react'
import Image from 'next/image'
import ScrollAnimation from './scroll-animation'

function process() {
  return (

    <ScrollAnimation>
    <div className='flex items-center justify-center min-h-screen bg-greenish '>
        <Image src="/images/management.png" alt="Description" width={600} height={500} />
    </div></ScrollAnimation>
  )
}

export default process