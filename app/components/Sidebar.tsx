import Image from 'next/image'
import React from 'react'

const Sidebar: React.FC = () => {
  return (
   <>
   
   {/* Sidebar */}
   

   {/* Hamburger Menu */}
   <div className='hamburguer'>
    <Image src="/assets/img/icons/hamburger-menu.webp" width={40} height={40} alt='Hamburger Icon'/>
   </div>
   </>
  )
}

export default Sidebar