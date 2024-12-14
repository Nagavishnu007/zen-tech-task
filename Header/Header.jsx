import React from 'react'
import logo from '../assets/logo.png'
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (

    <>
      <header className='bg-white flex justify-between items-center px-2  mb-0.5  drop-shadow-2xl  '>
      
                      <img src={logo} 
                           alt='logo' 
                           className='w-10 h-10 bg-transparent'/>
                        <IoMdMenu className='text-2xl '/>   
      
     </header>
    </>
  )
}

export default Header
