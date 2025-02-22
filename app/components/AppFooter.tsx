import Image from 'next/image'
import React from 'react'

const AppFooter: React.FC = () => {
  return (
    <header className='w-full shadow-2xl p-3'>
        <Image src='/assets/cibra-logo.webp' alt='logo' width='100' height='100' />
    </header>
  )
}

export default AppFooter