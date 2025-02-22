import Image from 'next/image'
import React from 'react'

const AppFooter: React.FC = () => {
  return (
    <footer className='w-full shadow-2xl p-3 bg-lime-500'>
      <div className='w-full flex justify-around items-center'>
        <Image src='/assets/img/cibra-logo.webp' width={150} height={60} alt='Cibra Logo' className='rounded-full shadow-lg'/>
      </div>
    </footer>
  )
}

export default AppFooter