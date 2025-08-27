import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
        <Image src="/multi.png" height={32} width={32} alt='logo' />
        <span className='text-2xl font-semibold dark:text-white'>MultipleX</span>
    </div>
  )
}

export default Logo